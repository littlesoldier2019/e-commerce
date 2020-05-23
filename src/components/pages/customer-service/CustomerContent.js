import React, { useState } from "react";
import CustomerToggle from "./CustomerToggle";
import CustomerTitle from "./CustomerTitle";

const CustomerContent = () => {
  const [customerElems, setCustomerElems] = useState({
    orderIssues: [
      {
        id: "oi1",
        title: "duties & taxes",
        desc:
          "Here you can read more information about our taxation system in details",
      },
      {
        id: "oi2",
        title: "Order tracking",
        desc:
          "After placing an order, you will receive an email containing all the details. We may also be in touch in case you need further information to verify your payment",
      },
      {
        id: "oi3",
        title: "Same day delivery",
        desc:
          "It's possible to have the delivery in the same day if you live in the Finland",
      },
      {
        id: "oi4",
        title: "Can I change the collection location for my order?S",
        desc:
          "It's possible to have the delivery in the same day if you live in the Finland",
      },
    ],
    delivery: [
      {
        id: "del1",
        title: "cancellations",
        desc: "If you want you can cancel your order during the 30 days",
      },
      {
        id: "del2",
        title: "preorders",
        desc:
          "There is a possibility to make preorder and pay when you receive the order",
      },
    ],
    returnsRefunds: [
      {
        id: "rr1",
        title: "customised items",
        desc: "hello here is customised items",
      },
      {
        id: "rr2",
        title: "refunds",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum posuere vehicula. Vivamus aliquam, dui eget mattis imperdiet, arcu sapien porta leo, sollicitudin vestibulum massa dolor in nisi. Aenean consequat ornare lobortis. Fusce a imperdiet lorem, ac sagittis tellus. Praesent non eleifend augue, at consectetur lorem. Aenean dictum iaculis semper. Aenean elit dui, interdum sit amet quam a, efficitur sagittis lacus. Vestibulum et scelerisque sapien. Praesent vestibulum turpis vitae turpis imperdiet placerat. Integer lobortis ut mi nec interdum. Ut vel fermentum velit, et mollis mi. Pellentesque ac lectus sed ex gravida volutpat. Duis maximus venenatis nunc quis euismod. Cras sodales ullamcorper leo, in bibendum neque gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      },
      {
        id: "rr3",
        title: "final sale",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum posuere vehicula. Vivamus aliquam, dui eget mattis imperdiet, arcu sapien porta leo, sollicitudin vestibulum massa dolor in nisi. Aenean consequat ornare lobortis. Fusce a imperdiet lorem, ac sagittis tellus. Praesent non eleifend augue, at consectetur lorem. Aenean dictum iaculis semper. Aenean elit dui, interdum sit amet quam a, efficitur sagittis lacus. Vestibulum et scelerisque sapien. Praesent vestibulum turpis vitae turpis imperdiet placerat. Integer lobortis ut mi nec interdum. Ut vel fermentum velit, et mollis mi. Pellentesque ac lectus sed ex gravida volutpat. Duis maximus venenatis nunc quis euismod. Cras sodales ullamcorper leo, in bibendum neque gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      },
      {
        id: "rr4",
        title: "returns process",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum posuere vehicula. Vivamus aliquam, dui eget mattis imperdiet, arcu sapien porta leo, sollicitudin vestibulum massa dolor in nisi. Aenean consequat ornare lobortis. Fusce a imperdiet lorem, ac sagittis tellus. Praesent non eleifend augue, at consectetur lorem. Aenean dictum iaculis semper. Aenean elit dui, interdum sit amet quam a, efficitur sagittis lacus. Vestibulum et scelerisque sapien. Praesent vestibulum turpis vitae turpis imperdiet placerat. Integer lobortis ut mi nec interdum. Ut vel fermentum velit, et mollis mi. Pellentesque ac lectus sed ex gravida volutpat. Duis maximus venenatis nunc quis euismod. Cras sodales ullamcorper leo, in bibendum neque gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      },
      {
        id: "rr5",
        title: "returns policy & process",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum posuere vehicula. Vivamus aliquam, dui eget mattis imperdiet, arcu sapien porta leo, sollicitudin vestibulum massa dolor in nisi. Aenean consequat ornare lobortis. Fusce a imperdiet lorem, ac sagittis tellus. Praesent non eleifend augue, at consectetur lorem. Aenean dictum iaculis semper. Aenean elit dui, interdum sit amet quam a, efficitur sagittis lacus. Vestibulum et scelerisque sapien. Praesent vestibulum turpis vitae turpis imperdiet placerat. Integer lobortis ut mi nec interdum. Ut vel fermentum velit, et mollis mi. Pellentesque ac lectus sed ex gravida volutpat. Duis maximus venenatis nunc quis euismod. Cras sodales ullamcorper leo, in bibendum neque gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      },
    ],
    payment: [
      {
        id: "pay1",
        title: "Which currencies can i shop in",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
      {
        id: "pay2",
        title: "When will my card be charged",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
      {
        id: "pay3",
        title: "Which payment methods do you accept",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
      {
        id: "pay4",
        title: "Will my personal details stay safe?",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
      {
        id: "pay5",
        title: "How to find products",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
      {
        id: "pay6",
        title: "How to order and pay",
        desc:
          "Vestibulum varius posuere rhoncus. Nam pharetra eros non sapien dapibus, sit amet hendrerit purus gravida. Nulla at convallis nulla. Praesent dignissim cursus metus ut fermentum. Donec eget lacus in eros finibus ornare a sit amet dolor. Nunc auctor dolor ultricies consectetur luctus. Sed ligula ipsum, dictum sit amet fermentum in, ornare sit amet urna. Nunc venenatis, elit vel iaculis tempus, nisl ex vehicula velit, nec finibus mi urna vel dolor. Duis augue lacus, congue eu tristique et, egestas sed metus.",
      },
    ],
  });
  return (
    <div>
      <CustomerTitle />
      <CustomerToggle title="Order issues" items={customerElems.orderIssues} />
      <CustomerToggle title="Delivery" items={customerElems.delivery} />
      <CustomerToggle
        title="Returns & Refunds"
        items={customerElems.returnsRefunds}
      />
      <CustomerToggle title="Payment" items={customerElems.payment} />
    </div>
  );
};

export default CustomerContent;
