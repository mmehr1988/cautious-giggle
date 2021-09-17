const { Post } = require('../models');

const postData = [
  {
    title: 'EVPassport Launches First Open EV Charging Platform',
    post_content: "EVPassport's new business model is an interoperable network with open REST API sets for location information, real-time availability, billing rates, and more. The API-driven platform enables developers to integrate live EVPassport chargers directly into their applications, electric vehicle dashboards, services, and more, to control the user experience and drive brand engagement.\n\nEVPassport leverages API integrations to enable charging on any network without having to have a pre-established network account. Users aren't required to download an app or use an RFID card in order to pay to charge their vehicles.\n\nAnother attractive aspect of EVPassport is the hardware is extremely simple and that has kept the cost down. Every charger is internet-connected and extremely affordable. Fisher compared his level 2 chargers to those on the ChargePoint network explaining that ChargePoint's single-head level 2 charging station costs about $4,000, and EVPassport's comparable solution costs only $1,000.\n\n",
    user_id: 1,
  },
  {
    title: 'Sample blog post',
    post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    user_id: 2,
  },
  {
    title: 'Sample blog post',
    post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    user_id: 3,
  },
  {
    title: 'Sample blog post',
    post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    user_id: 4,
  },
  {
    title: 'Sample blog post',
    post_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
