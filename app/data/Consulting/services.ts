export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
}

export const services: ServiceItem[] = [
    {
    title: "Team Bootstrap",
    description:
      `Team Bootstrap is designed for new teams or existing teams seeking a refresh. This comprehensive service blends coaching, 
      consulting, and hands-on training to rapidly build high-performing, collaborative teams in just three months.
      Engagement begins with a deep-dive assessment of your team's current ways of working —observing day-to-day practices and interviewing 
      key team members. Based on these insights, we co-create a tailored improvement roadmap, focused on both quick wins and sustainable transformation. 
      You’ll agree on clear, evidence-based metrics with your consultant at the start, ensuring every improvement is measurable and aligned with your business goals. 
      The program delivers an immersive period of both unlearning old habits and adopting optimal new approaches. Our focus is to instil practical 
      skills, foster a culture of learning, and deliver lasting impact.`,
    points: [
      "Collaboration mastery, including mobbing, pair programming, Three Amigos, and team huddles",
      "Enhancing agile practices such as Scrum, Kanban, and eXtreme Programming (XP)",
      "Transitioning from static requirement documents to an adaptive, emergent product backlog",
      "Moving from big bang releases to incremental, iterative product delivery for faster value realization",
      "Holistic test strategies that improves collaboration between developers and testers, strengthening product quality"
    ],
  },
  {
    title: "Delivery Management",
    description:
      `We offer specialized Delivery Management services designed to help organizations successfully 
      navigate the complexities of modern product development. Regardless of the size of your organisation, 
      from scale ups to multinationals our delivery consultants bring the expertise needed to ensure alignment, 
      effectiveness, and consistent delivery of value to your customers. We focus on enabling teams and 
      leadership to work together effectively, creating an environment where innovation thrives, and outcomes 
      are predictable.`,
    points: [
      "Establishing delivery frameworks that support end-to-end accountability",
      "Maintaining a clear roadmap that aligns with your organization’s strategic objectives",
      "Embedding themselves within your teams to  identify bottlenecks, reduce cycle time, and enable consistent delivery of high-quality products and services. ",
      "Providing coaching and mentoring to leaders and teams alike.",
    ],
  },
  {
    title: "Product Delivery",
    description:
      `Our Product Delivery service helps your organisation's turn ideas into great products, we use sound product 
      management practices to help you extract revenue from these products and eventually retire these products.
      As part our services, we help identify products that do not scale, support your organisation to pivot these 
      product or sunset them. We have observed that there is inherently a lot of waste in organisations by continually 
      investing in products that do not contribute towards the organisation strategy and adopting 
      some of our product management practices help create a connection between the organisational 
      strategy and execution within product teams.`,
    points: [
      "Creating product goals for products in your organisation using OKR Framework",
      "Designing a product framework for effective collaboration with multiple stakeholders across the organisation",
      "Metrics that help the product teams show progress toward the defined product goals",
      "Embracing an empirical process approach towards Product Management",
      "Defining practices for ordering product backlog items in the product backlog",
    ],
  },
  {
    title: "Continuous Delivery",
    description:
      `A central theme to application delivery is enabling teams to build better products faster. 
      Continuous Integration and Continuous Delivery are practices that enables the product teams 
      gather feedback in real time as the product is being built. Continuous Delivery is a set 
      of practices that provide the capabilities required to build, test, package and deploy 
      the product continuously. Metrics that represent the quality of the product collected automatically so that 
      teams can fix as soon as possible. Our consultants have implemented and supported many organisations with their 
      Continuous Delivery Implementation.`,
    points: [
      "An evaluation of the current state including tools / technology being used",
      "Designing a strategy for Continuous Delivery including covering any gaps in automated checks",
      "Tools selection for Continuous Delivery",
      "Coaching Product team on Agile Testing Mindset and practices",
      "Post Implementation support",
    ],
  },
  {
    title: "Test Strategy & Automation",
    description:
      `Organisations that desire to reduce time-to-market and improve the overall 
      quality of their product must invest into automated testing capabilities. Our consultants and 
      coaches have helped many organisations eliminate extended manual tests as part of their product 
      delivery cycles. We deploy automated tests at multiple layers of the application - Unit Tests, Integration Tests, E2E Tests, Acceptance Tests, 
      and Performance Tests using industry leading tools and practices.`,
    points: [
      "Training your product teams on approaches to Software Testing",
      "Improving the quality of the product, working alongside your teams",
      "Implementing a thorough automated test suite for existing or new products",
      "Designing a Test Automation strategy for products across your organisation",
    ],
  },
  {
    title: "Enterprise and Team Coaching",
    description:
      `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole 
      organisation could be an uphill battle; to deliver sustainable and long-lasting change, 
      business agility should be introduced using a “whole organisation” approach. The practices 
      and methods that we introduce are inspire by the Scrum Framework, Kanban Method and other 
      Lean practices. Our coaches have helped many organisations with their Agile Transformation.`,
    points: [
      "Articulating the outcomes desired from the team's and organisation’s intention to adopt agile ways of working",
      "Creating experiments for improving the teams’ and organisation’s agility",
      "Using appropriate agility metrics kick off a process of continuous improvement within the teams",
    ],
  },
];
