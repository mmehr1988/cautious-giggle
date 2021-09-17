const { Post } = require('../models');

const postData = [
  {
    title: 'EVPassport Launches First Open EV Charging Platform',
    post_content: "EVPassport's new business model is an interoperable network with open REST API sets for location information, real-time availability, billing rates, and more. The API-driven platform enables developers to integrate live EVPassport chargers directly into their applications, electric vehicle dashboards, services, and more, to control the user experience and drive brand engagement.\n\nEVPassport leverages API integrations to enable charging on any network without having to have a pre-established network account. Users aren't required to download an app or use an RFID card in order to pay to charge their vehicles.\n\nAnother attractive aspect of EVPassport is the hardware is extremely simple and that has kept the cost down. Every charger is internet-connected and extremely affordable. Fisher compared his level 2 chargers to those on the ChargePoint network explaining that ChargePoint's single-head level 2 charging station costs about $4,000, and EVPassport's comparable solution costs only $1,000.",
    user_id: 1,
  },
  {
    title: 'Why is there a chip shortage?',
    post_content: "Today, millions of products - cars, washing machines, smartphones, and more - rely on computer chips, also known as semiconductors.\n\nAnd right now, there just aren't enough of them to meet industry demand. As a result, many popular products are in short supply.\n\nIt has become almost impossible to buy a PS5 games console. Toyota, Ford and Volvo have had to either slow or temporarily halt production at their factories. Smartphone makers are feeling the pinch too, with Apple warning that the shortage could affect iPhone sales.\n\nEven companies that wouldn't necessarily be associated with computer chips haven't been spared, such as CSSI international, a US firm that makes dog-grooming machines, is feeling the effects.\n\nSome shoppers have already noticed these problems. Sales of used-cars are up, for instance, because new vehicles, often packed with thousands of individual chips, are in short supply.",
    user_id: 2,
  },
  {
    title: 'Microsoft GitHub rival GitLab files to go public after annualized revenue tops $200 million',
    post_content: 'GitLab, a provider of cloud-based software that allows developers to share code and collaborate on projects, is the latest high-growth tech company to line up for an IPO.\n\nGitLab joins the ranks of cloud software companies gearing up to take advantage of an ongoing bull market that values growth above all else. Toast, which sells software and hardware to help restaurants manage orders and move to takeout, is slated to debut next week, along with Freshworks, a smaller competitor to Salesforce in providing software to customer service and sales organizations.',
    user_id: 3,
  },
  {
    title: 'Artificial Intelligence (AI) and Machine Learning',
    post_content: 'Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more.\n\nOther than that AI will be used further to analyze interactions to determine underlying connections and insights, to help predict demand for services like hospitals enabling authorities to make better decisions about resource utilization, and to detect the changing patterns of customer behaviour by analyzing data in near real-time, driving revenues and enhancing personalized experiences.\n\nThe AI market will grow to a $190 billion industry by 2025 with global spending on cognitive and AI systems reaching over $57 billion in 2021.  With AI spreading its wings across sectors, new jobs will be created in development, programming, testing, support and maintenance, to name a few. On the other hand AI also offers some of the highest salaries today ranging from over $1,25,000 per year (machine learning engineer) to $145,000 per year (AI architect) - making it the top new technology trend you must watch out for!',
    user_id: 4,
  },
  {
    title: "Quantum Computing: What It Is, Why We Want It, and How We're Trying to Get It",
    post_content: "Quantum mechanics emerged as a branch of physics in the early 1900s to explain nature on the scale of atoms and led to advances such as transistors, lasers, and magnetic resonance imaging. The idea to merge quantum mechanics and information theory arose in the 1970s but garnered little attention until 1982, when physicist Richard Feynman gave a talk in which he reasoned that computing based on classical logic could not tractably process calculations describing quantum phenomena. Computing based on quantum phenomena configured to simulate other quantum phenomena, however, would not be subject to the same bottlenecks. Although this application eventually became the field of quantum simulation, it didn't spark much research activity at the time.\n\nQuantum computers have the potential to revolutionize computation by making certain types of classically intractable problems solvable. While no quantum computer is yet sophisticated enough to carry out calculations that a classical computer can't, great progress is under way. A few large companies and small start-ups now have functioning non-error-corrected quantum computers composed of several tens of qubits, and some of these are even accessible to the public through the cloud. Additionally, quantum simulators are making strides in fields varying from molecular energetics to many-body physics.\n\nAs small systems come online a field focused on near-term applications of quantum computers is starting to burgeon. This progress may make it possible to actualize some of the benefits and insights of quantum computation long before the quest for a large-scale, error-corrected quantum computer is complete.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
