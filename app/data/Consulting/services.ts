export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
}

export const services: ServiceItem[] = [
  {
    title: "Product Management",
    description:
      "Product Management practices help organizations turn ideas into valuable products, generate revenue, and eventually retire them. These practices also quickly eliminate products that don't scale, reducing waste and aligning product efforts with organizational strategy.",
    points: [
      "Creation of product goals for products in your organisation using OKR Framework",
      "Design a product framework for effective collaboration with multiple stakeholders across the organisation",
      "Metrics that help the product teams show progress toward the defined product goals",
      "Embracing an empirical process approach towards Product Management",
      "Defining practices for ordering product backlog items in the product backlog",
    ],
  },
  {
    title: "Continuous Delivery",
    description:
      "Continuous Delivery practices help organizations deliver software rapidly and reliably.",
    points: [
      "Implementation of CI/CD pipelines",
      "Automation of deployment processes",
      "Quality assurance integration",
    ],
  },
  {
    title: "Test Automation",
    description:
      "Test Automation practices help organizations ensure software quality efficiently.",
    points: [
      "Test strategy development",
      "Framework implementation",
      "Test coverage optimization",
    ],
  },
  {
    title: "Agile Fundamentals Training",
    description:
      "Agile Fundamentals Training helps organizations adopt agile methodologies effectively.",
    points: [
      "Scrum and Kanban methodologies",
      "Agile best practices",
      "Team collaboration techniques",
    ],
  },
];
