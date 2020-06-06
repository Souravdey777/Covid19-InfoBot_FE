import React from 'react';
import { Chat, HeroCard } from '@progress/kendo-react-conversational-ui';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { ApiAiClient } from 'api-ai-javascript';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.client = new ApiAiClient({
            accessToken: '5188e935cea54fd4b2079aa176f48ecd'
        });
        this.client.eventRequest("Welcome").then(this.onResponse, this);
        this.user = {
            id: 1
        };
        this.bot = {
            id: "Info Buddy",
            name: 'Covid19 Info Bot'
        };
        this.addNewMessage = this.addNewMessage.bind(this);
    }

    аttachmentTemplate = (props) => {
        let attachment = props.item;
        return <HeroCard title={attachment.title}
                imageUrl={attachment.images ? attachment.images[0].url : ""}
                subtitle={attachment.subtitle ? attachment.subtitle : "" }
                actions={attachment.buttons}
                onActionExecute={this.addNewMessage}/>;
    }

    parseActions = (actions) => {
        if (actions !== undefined ) {
            actions.map(action => {
                if (action.type === "postBack") {
                    action.type = 'reply';
                }
            });
            return actions;
        }
        return [];
    }

    parseText = ( event ) => {
        if (event.action !== undefined) {
            return event.action.value;
        } else if ( event.value ) {
            return event.value;
        } else {
            return event.message.text;
        }
    }

    onResponse = (activity) => {
        let that = this;
        activity.result.fulfillment.messages.forEach(function(element) {
            let newMessage;
            newMessage = {
                text: element.speech,
                author: that.bot,
                timestamp: new Date(activity.timestamp),
                suggestedActions: element.replies ? element.replies.map(x => { return { type: "reply", title: x, value: x };}) : []
            };
            that.setState((prevState) => {
                return { messages: [ ...prevState.messages, newMessage ] };
            });
        });

        if (activity.result.fulfillment.data) {
          console.log(activity.result.fulfillment.data)
            let newMessage;
            newMessage = {
                text: "",
                author: that.bot,
                timestamp: new Date(activity.timestamp),
                suggestedActions: activity.result.fulfillment.data.suggestedActions ? this.parseActions(activity.result.fulfillment.data.null.suggestedActions) : [],
                attachments: activity.result.fulfillment.data.attachments ? activity.result.fulfillment.data.null.attachments : []

            };
            that.setState((prevState) => {
                return { messages: [ ...prevState.messages, newMessage ] };
            });
        }
    }

    addNewMessage = (event) => {
        let value = this.parseText(event);
        this.client.textRequest(value.toString()).then(this.onResponse, this);
        if (!event.value) {
            this.setState((prevState) => {
                return { messages: [ ...prevState.messages, { author: this.user, text: value, timestamp: new Date() } ] };
            });
        }
    };

    render() {
        return (
          <div 
          style={{height:"100vh",display:"flex"}}>
            <Chat
                width="100%"
                messages={this.state.messages}
                user={this.user}
                onMessageSend={this.addNewMessage}
                attachmentTemplate={this.аttachmentTemplate}
            />
          </div>
        );
    }
}

export default App;

