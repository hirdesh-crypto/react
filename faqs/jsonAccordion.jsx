import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';
require('./app.css');
import Data from './data.js'
var tag;
class Apple extends React.Component {
   constructor() {
      super();

      this.state = {
         data: [
    {
        "question": "Where is my order?",
        "answer": "To know the status of your order please follow the steps below:  <ul><li>Visit the Track Order section on the website</li><li>Enter your Order ID & Phone Number</li><li>You will get to know the status of your order (Is it confirmed, out for delivery, packed etc.) Rest easy!</li>",
        "tags": ["order-issues"]
}, {
        "question": "How do I reschedule delivery?",
        "answer": "To reschedule delivery, please write to orders@flyrobe.com with:  <ul><li>Your Order ID (starting with OP)</li><li>The new delivery time</li><li>The new delivery date (if applicable)</li></ul>",
        "tags": ["order-issues"]
}, {
        "question": "I'm not able to place my order..",
        "answer": "We're so sorry you're facing hiccups while placing an order, we'd hate to inconvenience you further. So here are some options:<ul><li>Drop us a message on the chat box you see on the bottom left corner</li><li>Call us on +91-8433900130</li><li>Email us on orders@flyrobe.com</li></ul> Our team will resolve your issue swiftly!",
        "tags": ["order-issues"]
}, {
        "question": "What if the delivered dress doesn't fit me?",
        "answer": "However hard we try to delight you - on rare occasions sometimes a dress doesn't fit as well as you'd like - we get it! Don't worry, Flyrobe has got you covered. Here is what you should do:<br><br><span class=&#39;faq-sub-header&#39;>Ethnic Wear: </span><br>Please email us on orders@flyrobe.com or call us at +91-8433900130 within 12 hours of receiving the outfit, if you have any issue with it. We will try to re-fit the outfit or send you another dress of your choice. You can also request a full refund.<br><br><span class=&#39;faq-sub-header&#39;>Western Wear: </span><br>Our delivery boy can be requested to wait for up to 15 mins while you try the outfit. If it doesn’t fit, you can return it then. If you need more than 15 mins then please email us on orders@flyrobe.com or call us at +91-8433900130 within 2 hours of receiving the outfit. We will replace the outfit with another one, again within 3 hours. Else you can request a full refund.",
        "tags": ["order-issues"]
}, {
        "question": "I want to cancel my order.",
        "answer": "Oh no! Cancellations make us sad. However, to make it easy for you we allow cancellations anytime. Please follow these steps:  <ul><li>Visit the 'Track Order' section on our website</li><li>Enter your order ID (starting with OP) and phone number</li><li>Click  'Cancel this item'</li></ul>You can also cancel the order by dropping an email to to orders@flyrobe.com with the order ID and phone number.",
        "tags": ["order-issues"]
}, {
        "question": "I want to reschedule my pick up",
        "answer": "Delayed in traffic? Held up in a meeting - we know these things happen. If you want to reschedule pick up, please drop a mail to orders@flyrobe.com with the following details and we will make it happen:  <ul><li>Your order ID</li><li>The time of pick up</li><li>Phone Number</li></ul>",
        "tags": ["order-issues"]
}, {
        "question": "My pick up has not arrived",
        "answer": "We're sorry to hear that! In case your pick up has not arrived at the scheduled hour then please drop a mail to orders@flyrobe.com with your order ID & our team will get back to you regarding the status or to reschedule a convenient time for you.",
        "tags": ["order-issues"]
}, {
        "question": "What if the delivered dress doesn't fit me?",
        "answer": "However hard we try to delight you - on rare occasions sometimes a dress doesn't fit as well as you'd like - we get it! Don't worry, Flyrobe has got you covered. Here is what you should do:<br><br><span class=&#39;faq-sub-header&#39;>Ethnic Wear: </span><br>Please email us on orders@flyrobe.com or call us at +91-8433900130 within 12 hours of receiving the outfit, if you have any issue with it. We will try to re-fit the outfit or send you another dress of your choice. You can also request a full refund.<br><br><span class=&#39;faq-sub-header&#39;>Western Wear: </span><br>Our delivery boy can be requested to wait for up to 15 mins while you try the outfit. If it doesn’t fit, you can return it then. If you need more than 15 mins then please email us on orders@flyrobe.com or call us at +91-8433900130 within 2 hours of receiving the outfit. We will replace the outfit with another one, again within 3 hours. Else you can request a full refund.",
        "tags": ["return-and-cancel", "fitting"]
}, {
        "question": "I want to cancel my order.",
        "answer": "Oh no! Cancellations make us sad. However, to make it easy for you we allow cancellations anytime. Please follow these steps:  <ul><li>Visit the 'Track Order' section on our website</li><li>Enter your order ID (starting with OP) and phone number</li><li>Click  'Cancel this item'</li></ul>You can also cancel the order by dropping an email to to orders@flyrobe.com with the order ID and phone number.",
        "tags": ["return-and-cancel"]
}, {
        "question": "What if I have size and fit issues?",
        "answer": "We understand how important getting the right fit is and we take this seriously. Here are a few things we do to help you find the right fit:<br><br><span class=&#39;faq-sub-header&#39;>Ethnic Wear collection: </span><br>We custom fit the outfit to your size. However, we can only custom fit within certain ranges. While browsing the catalog you will see a size guide with range in which the garment can be altered. Do keep that in mind while ordering an item. To give you an example, if your bust size is 32, you should avoid items that have a bust size from 33- 36.<br><br><span class=&#39;faq-sub-header&#39;>Western Wear collection: </span><br>We’d advise you to see the size guide present along with each outfit. If you are still in doubt, then you can order two sizes in the same fit and try them on.<br><br>In case you have any other questions on sizing you can call us at +91-8433900130 or email us at orders@flyrobe.com and our friendly styling expert will surely help you out!",
        "tags": ["fitting"]
}, {
        "question": "How does custom fitting for 'Ethnic Wear' collection work?",
        "answer": "On placing an order, you will receive a call from our customer care team to check your availability for a home visit by our fit experts. Our fit expert will visit you at your preferred date and time to take your measurements. The outfit will be altered as per your size in our studio and delivered to you in your size on the selected date of delivery. We advise that you keep the delivery date a day in advance of your event in case you’d like to try it on for size once.<br>Please do keep our sizing guide instructions on selecting an outfit that’s customizable to your size in mind while placing an order, to avoid disappointment.",
        "tags": ["fitting"]
}, {
        "question": "Can I alter the dress myself at home?",
        "answer": "We have strict policies against customers doing any alterations at home. Each outfit is handled with tremendous care by the Flyrobe team to ensure our customers have the best experience and hence we prefer to work on all alterations ourselves. If we find an outfit has been altered we'll have to impose the following penalties:<br>Ethnic Wear:  We’ll have to deduct money from your security deposit according to the damages done to the outfit.<br>Western Wear: We’ll have to ask you to purchase the outfit.",
        "tags": ["fitting"]
}, {
        "question": "What methods of payment do you accept?",
        "answer": "We accept Online Payment, Cash on Delivery & Card on Delivery.",
        "tags": ["payment"]
}, {
        "question": "What is the time taken to process the refund of the security deposit?",
        "answer": "The day we pick up your outfit, we perform a thorough quality check. After the dress passes the quality check, we can return the deposit as follows based on your method of payment:  <ul><li>Online Payment- Your security deposit will be credited to your bank account within 2 working days.</li><li>Cash/Card on Delivery: If you paid through cash/card on delivery: we can refund the money straight to your bank account, or return in cash within 7 working days.</li><li>Our customer service executives will call up to ask you which option you prefer or you can directly send us your bank details at orders@flyrobe.com with your order ID after your pick up.",
        "tags": ["payment", 'deposits']
}, {
        "question": "What happens to the amount I've paid in case I cancel the order?",
        "answer": "If you cancel the order, we will refund the complete amount you have paid including your security deposit.",
        "tags": ["payment"]
}, {
        "question": "How can I find the best promotions running?",
        "answer": "We make it easy for you to find the best promotions. Once you’ve added products to cart, click on ‘Show Available Coupons’ displayed on the right of your screen and select the best suggested coupon for your order.",
        "tags": ["payment"]
}, {
        "question": "How do you ensure hygiene?",
        "answer": "At Flyrobe customer delight is everything and we hold ourselves to very high hygiene standards. We have partnered with international laundry experts to ensure each outfit is properly dry cleaned before being delivered to a customer. We take great care of our accessories too - each accessory is sterilised before you receive it.",
        "tags": ["quality"]
}, {
        "question": "Do I need to dry clean the dress myself before or after wearing?",
        "answer": "Not at all. Dry cleaning is always on us! We deliver the dress to you in perfect condition for you to just slip it on and dazzle. You do not need to dry clean the dress before returning it either! We mean it when we say we’re hassle free fashion at your doorstep.",
        "tags": ["quality"]
}, {
        "question": "Will I need to iron the dress myself?",
        "answer": "Creases are ugly- we know! We steam iron every outfit right before delivery to remove any possible creases. Do hang it up carefully once you receive it and just slip the dress before the event. Since we only use non contact steam ironing on our outfits by experts to prevent iron marks, we strictly advice that you don’t iron the outfit yourself.",
        "tags": ["quality"]
}, {
        "question": "Do I have to pay any security deposit?",
        "answer": "Our Ethnic Wear collection is our labor of love, and we’d hate to see it damaged. We collect 20% of the Retail Price of the product as a security deposit. Don’t worry though- this is fully refundable if the outfit is returned in good condition. What’s good condition, you ask? We understand a drink can spill, or perfume and lipstick can stain an outfit sometimes. We don’t charge for minor damages or stains. However, if the outfit is damaged significantly i--e the cost of repair is high then we shall deduct partial or full value of the security deposit. We’ll decide the amount on a case-by-case basis at our discretion.<br><br>For all other occasions, there is no security deposit. We urge you to use it responsibly.",
        "tags": ['deposits']
}, {
        "question": "How does Flyrobe work?",
        "answer": "Flyrobe is a fashion rental service. We are your wardrobe bestie helping you dazzle at all the occasions in your life whether that’s a date night, club night, brunch, best friend’s or even your own wedding!<br><br> We offer items across ethnic and western wear. In western, you can book for the same day or next day. We have a 3 hour delivery option & we pick up on the third day of delivery. In ethnic, you can book from two days to upto 2 months in advance. For ethnic, we offer custom fitting with each order & an option to book for a duration of 4, 6 or 8 days.<br><br> In our Ethnic Wear section you can rent outfits from leading designers such as Ritu Kumar, Shehla Khan, Samant Chauhan and leading boutiques such as Kalki, Frontier Raas and House of Ombre. In our Western Wear collection we bring you the best of Indian and international brands such as Asos, Mango, Topshop, Vero Moda, Boohoo, Quirkbox and several more.",
        "tags": ["how-it-works"]
}, {
        "question": "I want to chat, how do I contact you?",
        "answer": "Bouquets, brickbats or just questions- we’d love to hear them all! Just pick up the phone and call us at +91-8433900130 in case of any queries/ complaints/ suggestions. Or email us at hello@flyrobe.com.",
        "tags": ["get-in-touch"]
}, {
        "question": "I am happy with your service, where do I leave my review?",
        "answer": "We’re so happy you enjoyed your fashion date! You can review the app on the Google Playstore <hyperlink>  along with a rating. You can also leave your testimonial on our Facebook page (Flyrobe), Instagram account (@flyrobe) or Twitter account (@flyrobe). Alternatively, you can write to us at hello@flyrobe.com.",
        "tags": ["get-in-touch"]
}, {
        "question": "Which cities do you deliver to?",
        "answer": "We’re currently live in Delhi, Mumbai and Gurgaon. If you’re a bride and looking to rent an outfit from Flyrobe we might be able to bend the rules for you, so email us at hello@flyrobe.com.",
        "tags": ["delivery"]
}, {
        "question": "When will you be live in my city?",
        "answer": "If you want us to be live in your city do drop us a mail on hello@flyrobe.com with the name of our city. We take your feedback very seriously.",
        "tags": ["delivery"]
}, {
        "question": "Will you deliver to a different city if I pay extra?",
        "answer": "No promises but for certain special occasions we can perhaps make an exception and deliver to your city. Please write to us at hello@flyrobe.com with the details and we'll get back to you in 1 day.",
        "tags": ["delivery"]
}, {
        "question": "What is your delivery timeline in the cities where you are live?",
        "answer": "For cities where we are live here are our delivery timelines.<br><br>For western wear outfits:<br>  We deliver on the same day or next day. You can select a 2 hour delivery slot that’s most convenient to you while placing the order. If required we can deliver within 3 hours too, as long as you order before 8pm!<br>For ethnic Wear:<br> We deliver the outfit on your selected delivery date within a 3 hour time slot that’s most convenient for you to receive the delivery.",
        "tags": ["delivery"]
}, {
        "question": "How do I get referral credit?",
        "answer": "Yes please, do share Flyrobe with your friends! You will get the referral credit in your Flyrobe wallet, when your friend has ordered with your referral code and the order has been delivered.  The amount will automatically get credited to your wallet. To find your referral code use the following steps:  <ul><li>Log in to Flyrobe.com</li><li>Visit the Profile section</li><li>Find your referral code from the ‘Refer A Friend’ page</li><li>Share it with your friends!</li></ul>",
        "tags": ["referral"]
}, {
        "question": "Can I get cash instead of Flyrobe credit?",
        "answer": "Unfortunately not! We give credits for referrals only in your Flyrobe wallet. You can use it while placing the next order, so hey- win win!",
        "tags": ["referral"]
}, {
        "question": "How long will the referral credit take to get processed?",
        "answer": "The referral credit will be added automatically to your Flyrobe wallet once your friend who has ordered using your referral code receives the delivery.",
        "tags": ["referral"]
}
    ]
      }

   }

    render() {
        /*console.log(this.props)*/
        tag = this.props.tags
        return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Contents key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
    }
}

class Contents extends React.Component {
    render() {
        if (this.props.componentData.tags.indexOf(tag) > -1) {
            return (
                <div>
                    <Collapsible trigger={this.props.componentData.question}><span dangerouslySetInnerHTML={{__html: this.props.componentData.answer}}></span></Collapsible>
                </div>
            );
        }
        else{
            return null;
        }
   }
}
export default Apple;

