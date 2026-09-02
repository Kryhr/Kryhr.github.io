import birdhouseSketch from "../assets/school/sustainability-birdhouse.jpg";
import beeswaxSketch from "../assets/school/farm-to-table-sketch.jpg";

/**
 * Real content transcribed from Andrew's Community STEAM Academy
 * portfolio (Google Sites). Each project has its own real set of
 * section names, they aren't identical across projects, and that's
 * left as-is rather than forced into one template.
 *
 * Section `body` is an array of blocks. A block is either a plain
 * paragraph string, or { label, text } for a "**Label:** text" line,
 * or { list: [...] } for a bullet list.
 */
/**
 * Every school year that should appear as a tab, in order, whether or
 * not it has projects yet. A year with no matching SCHOOL_PROJECTS
 * entries renders as an honest "coming soon" placeholder rather than
 * being hidden or filled with fabricated content.
 */
export const SCHOOL_YEARS = ["2025-26", "2026-27"];

export const SCHOOL_PROJECTS = [
  {
    id: "cooking",
    course: "Cooking",
    year: "2025-26",
    title: "Captain Cook$$",
    sections: [
      {
        heading: "Overview",
        body: [
          "In this activity, we made barbecue sauce, tortillas, and chocolate while learning about food science concepts like starch and gluten.",
          "When making tortillas, we learned that gluten forms when flour and water are mixed and kneaded. Gluten gives the dough structure and makes it stretchy and flexible. Without gluten, the tortillas would fall apart.",
          "We also learned that starch plays an important role in cooking. Starch helps thicken sauces like barbecue sauce and changes texture when heated. Through this experience, we understood how ingredients react during cooking and how science is involved in everyday food preparation."
        ]
      }
    ]
  },
  {
    id: "adulting-101",
    course: "Adulting 101",
    year: "2025-26",
    title: "Adulting 101",
    sections: [
      {
        heading: "Project Overview",
        body: [
          { label: "Project Goal / Driving Question", text: "How can I build a sustainable and stable life after high school through career choices, budgeting, and healthy living?" },
          { label: "Project Overview", text: "Adulting 101 focuses on planning for life after high school. A sustainable life means staying healthy, managing money wisely, and choosing a stable career. In this project, I explored becoming an equity research analyst, creating a realistic budget, and planning affordable healthy meals. These choices help reduce stress, avoid debt, and support long-term success." }
        ]
      },
      {
        heading: "Design Thinking Process",
        body: [
          { label: "Empathize / Understand", text: "I thought about the challenges young adults face after high school, such as paying bills, eating healthy, and choosing a stable career." },
          { label: "Define", text: "The main problem is that many people leave high school unprepared for financial responsibility and healthy living." },
          { label: "Ideate / Brainstorm", text: "I brainstormed ways to live sustainably, including choosing a stable career, budgeting monthly expenses, and planning affordable meals." },
          { label: "Prototype", text: "I created a sample budget, career plan, and $25 healthy meal plan to show how sustainable living can work in real life." },
          { label: "Test", text: "I checked if my income covered expenses and if my meal plan was affordable and nutritious." },
          { label: "Implement / Communicate", text: "I presented my plan to show how smart choices can create a stable and healthy lifestyle." }
        ]
      },
      {
        heading: "Core Values",
        body: [
          { label: "Community Service Learning", text: "This project helps others understand how to live responsibly and avoid financial stress." },
          { label: "Dynamic Movement", text: "Planning transportation, housing, and career choices helps support independent living." },
          { label: "Holistic Thinking", text: "I considered finances, health, housing, and career together to create a balanced lifestyle." },
          { label: "Creative Expression", text: "I designed a realistic life plan, budget, and meal strategy." },
          { label: "Effective Communication", text: "I explained my financial plan and career path clearly through charts and examples." },
          { label: "Confident Identity", text: "This project helped me feel more confident about my future and life decisions." }
        ]
      },
      {
        heading: "Problem Solving Process",
        body: [
          { list: [
            "Identified challenges of adult life after high school",
            "Researched careers with stable income",
            "Created a monthly budget plan",
            "Planned affordable, healthy meals",
            "Compared income vs. expenses",
            "Refined plan to ensure financial stability"
          ] }
        ]
      },
      {
        heading: "Challenges & Solutions",
        body: [
          { label: "Challenge: Understanding real-life expenses", text: "Solution: I researched housing, utilities, insurance, and food costs to create a realistic budget." },
          { label: "Challenge: Balancing health and cost", text: "Solution: I planned meals using affordable foods like rice, vegetables, and chicken." },
          { label: "Challenge: Planning for the future", text: "Solution: I created savings and emergency funds to prepare for unexpected costs." },
          { label: "What I learned", text: "Planning ahead reduces stress and helps create a stable future." }
        ]
      },
      {
        heading: "Materials",
        body: [
          { label: "Career research", text: "Equity research analyst job details; salary and responsibilities." },
          { label: "Budget documents", text: "Monthly income vs. expenses chart; housing cost breakdown." },
          { label: "Meal planning", text: "$25 meal plan; nutrition breakdown." },
          { label: "Visuals", text: "Budget tables; meal photos; charts and graphs." }
        ]
      },
      {
        heading: "Achievements & Growth",
        body: [
          { label: "Achievements", text: "Created a realistic adult budget; planned a stable career path; designed a healthy $25 meal plan." },
          { label: "Growth in STEAM skills", text: "Improved financial literacy; strengthened planning and research skills; learned about nutrition and sustainability." },
          { label: "Problem-solving & responsibility", text: "This project helped me understand how daily choices affect long-term success." }
        ]
      },
      {
        heading: "Goals",
        body: [
          { list: [
            "Learn more about investing and financial planning",
            "Improve budgeting skills with real-world tracking",
            "Explore more affordable healthy recipes",
            "Build stronger career preparation skills",
            "Continue planning for long-term stability"
          ] }
        ]
      }
    ]
  },
  {
    id: "revolt",
    course: "ReVolt",
    year: "2025-26",
    title: "ReVolt: EV Battery Safety",
    sections: [
      {
        heading: "Project Overview",
        body: [
          { label: "Driving Question", text: "How can we improve electric vehicle safety by preventing battery fires caused by overheating or crashes?" },
          "Electric vehicles (EVs) are becoming more popular, but their batteries can be dangerous if they overheat or get damaged in a crash. When this happens, the battery can go into thermal runaway, which can cause fires or explosions that are very hard to stop. Our project, ReVolt, focuses on adding an automatic cooling and fire-suppression system to EV batteries. This system would activate when sensors detect overheating or a crash, helping prevent fires and keep drivers and emergency responders safer."
        ]
      },
      {
        heading: "Design Thinking Process",
        body: [
          { label: "Empathize / Understand", text: "We researched EV battery fires and learned how dangerous lithium-ion battery fires can be. We also thought about the risks for drivers, passengers, and firefighters who respond to EV crashes." },
          { label: "Define", text: "We defined the main problem as EV batteries overheating or catching fire during crashes or malfunctions, which puts people at serious risk." },
          { label: "Ideate / Brainstorm", text: "Our team brainstormed ideas like cooling systems, fire suppressants, and sensor-based safety systems. We decided on an automatic system that releases coolant and fire suppressant when danger is detected." },
          { label: "Prototype", text: "We built a model using foam board, tubing, a small container for the coolant tank, and fake sensors to show how the system would work in a real EV." },
          { label: "Test", text: "We tested the triggering system by simulating overheating or a crash to see if the coolant would release and spread across the battery area." },
          { label: "Implement / Communicate", text: "We presented our design to classmates and explained how the ReVolt system improves EV safety using real-world technology already used by firefighters." }
        ]
      },
      {
        heading: "Core Values",
        body: [
          { label: "Community Service Learning", text: "This project helps the community by focusing on safety for EV drivers and emergency responders." },
          { label: "Dynamic Movement", text: "Our project relates to transportation and movement by improving how people safely travel using electric vehicles." },
          { label: "Holistic Thinking", text: "We considered safety, cost, technology, and real-world use instead of focusing on just one part of the problem." },
          { label: "Creative Expression", text: "We creatively designed a new safety system and built a physical prototype to show our idea." },
          { label: "Effective Communication", text: "We explained our system clearly through presentations, diagrams, and discussions with classmates." },
          { label: "Confident Identity", text: "Working on this project helped us feel more confident in our STEAM skills and problem-solving abilities." }
        ]
      },
      {
        heading: "Problem Solving Process",
        body: [
          { list: [
            "Identified the danger of EV battery thermal runaway",
            "Researched lithium-ion battery fires and safety systems",
            "Designed a cooling and fire-suppression concept",
            "Built a prototype model",
            "Tested sensor activation and coolant release",
            "Refined the design and explained results"
          ] }
        ]
      },
      {
        heading: "Challenges & Solutions",
        body: [
          { label: "Challenge: Understanding EV battery fires", text: "Solution: we researched reliable sources like the National Fire Protection Association to understand how thermal runaway works." },
          { label: "Challenge: Making a safe prototype", text: "Solution: we used fake sensors and safe materials instead of real batteries to avoid danger." }
        ]
      },
      {
        heading: "Materials",
        body: [
          { label: "Define phase documents", text: "Research notes on EV battery fires; problem statement and goals." },
          { label: "Prototype materials", text: "Foam board / cardboard, tubing, a small container for the coolant tank, fake sensors, tape and glue." }
        ]
      },
      {
        heading: "Achievements & Growth",
        body: [
          { label: "Achievements", text: "Designed a realistic EV safety system; built a working prototype model; successfully demonstrated how the system activates." },
          { label: "Growth in STEAM skills", text: "Improved research and critical thinking; learned about sensors, systems, and fire suppression; gained experience working as a team." },
          { label: "Teamwork & creativity", text: "Each team member contributed research, ideas, and feedback to improve the final design." }
        ]
      },
      {
        heading: "Goals",
        body: [
          { list: [
            "Build a more detailed and realistic prototype",
            "Improve testing methods",
            "Learn more about electronics and sensor programming",
            "Communicate ideas more confidently and clearly"
          ] }
        ]
      }
    ]
  },
  {
    id: "sustainability",
    course: "Sustainability",
    year: "2025-26",
    title: "Sustainable Ecosystems: Bee-Safe Birdhouse",
    image: birdhouseSketch,
    imageCaption: "A 3D-modeled birdhouse design from the brainstorming phase.",
    sections: [
      {
        heading: "Project Overview",
        body: [
          "How can we analyze and improve our records more responsibly, reduce waste, and positively impact the environment at home and school? We are creating a bird house made by waste and supplied by waste. Our birdhouse will be made completely by waste we find. We will make a birdhouse as well as a bird feeder. Our deliverable is making a bird-safe haven near the Annex to support our wildlife."
        ]
      },
      {
        heading: "Design & Brainstorming",
        body: [
          "We started by discussing what birds live in our area and what types of shelters or feeders they prefer. Then we talked about what waste materials we could use safely. Some ideas included using milk cartons, cans, cardboard, old wood, leftover food for feeders, and solar-powered lights made from recycled parts. We made a list of ideas and voted on the most realistic and helpful ones.",
          "Each team member drew a design of a birdhouse. We included features like entrance holes, perches, feeder areas, and slanted roofs for rain protection. After comparing our designs, we combined the best parts into one final sketch to use as our blueprint. We used cardboard to build a basic model, tested balance, perch strength, and hole size, and figured out how to waterproof parts using scrap plastic or foil.",
          "We showed our prototype to teachers and classmates for feedback and tested it briefly outside, noticing problems like the roof coming loose or the perch being too small, and planned changes for the next version using stronger, more weatherproof materials."
        ]
      },
      {
        heading: "Deliverable",
        body: [
          { label: "Empathize / Understand", text: "We began by observing birds in our community and researching what types of shelters and feeders they prefer. We also learned about environmental issues caused by waste and how recycling and reusing materials could help both people and wildlife." },
          { label: "Define", text: "How can we reduce waste and support local birds by repurposing discarded materials into birdhouses and feeders? What materials are safe for birds? What types of homes do different birds like? What birds live near us?" },
          { label: "Ideate / Brainstorm", text: "We brainstormed designs using recycled materials such as cardboard, plastic bottles, wood scraps, and metal cans, and sketched ideas for how to make the birdhouses strong, waterproof, and eco-friendly." },
          { label: "Prototype", text: "We built a prototype using cardboard and other found materials to see what worked before making the final model from stronger recycled parts." },
          { label: "Test", text: "We placed our prototype outdoors to see if birds were attracted to it, monitored which materials held up best, and observed whether feeders made from leftover food were safe and appealing." },
          { label: "Implement / Communicate", text: "We created a presentation to share our findings, and will display our finished birdhouses around the school or community gardens to support local bird populations." }
        ]
      },
      {
        heading: "Core Values",
        body: [
          { label: "Community Service Learning", text: "We served our community by creating shelters for local birds, improving the environment, and encouraging others to recycle and reuse." },
          { label: "Dynamic Movement", text: "We explored outdoor areas, hiked to find birds, and tracked our heart rates (BPM) during birdwatching to include physical activity in our project." },
          { label: "Holistic Thinking", text: "We connected science, art, and environmental responsibility, understanding how human waste affects ecosystems and how small actions can make a big difference." },
          { label: "Creative Expression", text: "Designing and decorating our birdhouses allowed us to express creativity through color, shape, and form while using recycled materials." },
          { label: "Effective Communication", text: "We worked as a team, shared ideas, and prepared a formal slide presentation to clearly communicate our process and results." },
          { label: "Confident Identity", text: "Each team member contributed unique skills and took leadership roles, building confidence through teamwork and problem-solving." }
        ]
      },
      {
        heading: "Problem Solving Process",
        body: [
          { list: [
            "Observed birds in our local area",
            "Researched bird-safe materials and habitats",
            "Brainstormed sustainable designs",
            "Built prototypes from waste materials",
            "Collected data",
            "Improved the design",
            "Presented the project"
          ] }
        ]
      },
      {
        heading: "Challenges & Solutions",
        body: [
          { label: "Challenge: Finding materials that were safe and sturdy", text: "Solution: researched eco-friendly, non-toxic materials and reinforced weak parts using safe adhesives and natural coatings." },
          { label: "Challenge: Making the prototype weather-resistant", text: "Solution: used waterproof coatings and stronger recycled parts for the final model." }
        ]
      },
      {
        heading: "Materials",
        body: [
          { list: ["Cardboard", "Hot glue", "Scissors", "Box cutters"] }
        ]
      },
      {
        heading: "Conclusion",
        body: [
          "In this project we learned how we could take things that would usually be thrown away and turn them into something useful for the environment. By building birdhouses out of waste we found a way to help local birds and reduce trash at the same time. We also learned a lot about the birds that live around us, what kinds of homes they like, and how important it is to protect their habitats.",
          "This project helped us see that even small things like building a birdhouse can make a difference if enough people care. Overall this was a fun and meaningful project that taught us about nature, teamwork, and how to be more responsible with the waste we create."
        ]
      }
    ]
  },
  {
    id: "farm-to-table",
    course: "Farm To Table",
    year: "2025-26",
    title: "Farm To Table: Honey Bee Circular Economy",
    image: beeswaxSketch,
    imageCaption: "Early product sketches for beeswax candles and reusable beeswax wraps.",
    sections: [
      {
        heading: "Project Overview",
        body: [
          { label: "Driving Question", text: "How can we design a circular economy for our food system to reduce waste, feed more people, and protect our planet?" },
          "Our project explores how honey bees can create a small circular economy that benefits both people and the environment. Bees pollinate plants, which helps farms and gardens produce more food. The honey and beeswax they make can replace plastic products, and compost from leftover food and plants can grow more flowers for the bees. This creates a sustainable loop where nothing is wasted and everything supports the community and nature."
        ]
      },
      {
        heading: "Design Thinking Process",
        body: [
          { label: "Define", text: "We wanted to make our food system more eco-friendly and waste less. Bees help plants grow, make food, and give us honey and wax, so we decided to use them to build a small circular economy." },
          { label: "Ideate", text: "We came up with ideas like using beeswax instead of plastic and composting leftovers to grow more flowers. In the end, we decided to make bee boxes and use the wax for things like candles and wraps." },
          { label: "Prototype", text: "We made a 3D bee box model in AutoCAD, then built it for real. After adding bees, we planned to collect their honey and wax and turn it into reusable products." }
        ]
      },
      {
        heading: "Core Values",
        body: [
          { label: "Community Service Learning", text: "We supported our community by promoting sustainability and providing eco-friendly alternatives to plastic." },
          { label: "Dynamic Movement", text: "We walked around to find teachers when we had questions." },
          { label: "Holistic Thinking", text: "We connected environmental health, food systems, and waste reduction into one complete circular system." },
          { label: "Creative Expression", text: "We used design tools like AutoCAD and creative product ideas." },
          { label: "Effective Communication", text: "We worked as a team, shared research, and planned how to present our project to others." },
          { label: "Confident Identity", text: "Each team member contributed their unique strengths, showing confidence in research, design, and presentation." }
        ]
      },
      {
        heading: "Problem Solving Process",
        body: [
          { list: [
            "Identified the issue of plastic waste and low pollination rates",
            "Researched bee behavior, pollination benefits, and eco-friendly product alternatives",
            "Designed a sustainable beehive prototype in AutoCAD",
            "Built a physical model based on the design",
            "Introduced bees and monitored honey/wax production",
            "Collected and repurposed beeswax into products",
            "Used compost from leftover waste to regrow flowers for the bees"
          ] }
        ]
      },
      {
        heading: "Challenges & Solutions",
        body: [
          { label: "Challenge: Designing a bee box that was both functional and sustainable", text: "Solution: used 3D modeling software to test designs before building the real model." },
          { label: "Challenge: Understanding how to safely handle bees", text: "Solution: researched proper beekeeping methods and consulted guides." },
          { label: "Reflection", text: "We learned that sustainable design takes patience, creativity, and testing. Collaboration was key in solving problems effectively." }
        ]
      },
      {
        heading: "Materials",
        body: [
          { label: "Materials & tools", text: "AutoCAD (for design), beehives and bees, plants and flowers for pollination, beeswax and honey tools, a compost bin, materials for wraps and candles." },
          { label: "Budget", text: "About $555–$890 total." }
        ]
      },
      {
        heading: "Achievements & Growth",
        body: [
          { label: "Achievements", text: "Built and tested our own bee box design; created eco-friendly products from beeswax; helped raise awareness about sustainability in our community." },
          { label: "Growth", text: "Learned 3D design and teamwork skills; got better at problem-solving and creative thinking; understood more about how circular economies actually work." }
        ]
      },
      {
        heading: "Goals for Next Project",
        body: [
          { list: [
            "Make more bee boxes and track honey/wax production",
            "Partner with local gardens or schools to spread awareness",
            "Try new beeswax products or designs",
            "Keep improving the design for better results",
            "Collect more data on pollination and compost use"
          ] }
        ]
      }
    ]
  },
  {
    id: "sap-project",
    course: "SAP Project",
    year: "2025-26",
    title: "International Plant Shipping Using S.A.P.s",
    sections: [
      {
        heading: "Project Overview",
        body: [
          { label: "Driving Question", text: "How can S.A.P.s (Super Absorbent Polymers) be used to help ship plants to different regions of the world?" },
          "We started with the question, \"How do you keep plants hydrated for long periods of time while shipping?\" Our first idea was to use water beads that hold water and release it slowly into the soil. Then we thought about mixing potassium polyacrylate into the soil instead, because it adds nutrients and isn't toxic to the plants. Finally, we decided to use biodegradable cups filled with this soil mix to ship the plants. After doing some research we found out this method is actually one of the best ways to ship plants: it's safe, cheap, and helps the plants stay healthy."
        ]
      },
      {
        heading: "Design Thinking Process",
        body: [
          { label: "Empathize / Understand", text: "We realized that plants dry out really fast when shipped long distances. We wanted to find a way to keep them alive and hydrated." },
          { label: "Define", text: "Our problem was figuring out how to keep plants hydrated for a long time without making it expensive or toxic." },
          { label: "Ideate / Brainstorm", text: "We came up with ideas like using water beads, adding potassium polymers, and trying different soils. We also looked into biodegradable containers instead of plastic." },
          { label: "Prototype", text: "We decided to mix potassium polymer with soil and use biodegradable cups for planting. That combo seemed easiest and safest." },
          { label: "Test", text: "We didn't fully test yet, but we plan to check how long the soil stays wet and how the plants react during shipping." },
          { label: "Implement / Communicate", text: "We'll present our idea to show how using S.A.P.s can make plant shipping better and more eco-friendly." }
        ]
      },
      {
        heading: "Core Values",
        body: [
          { label: "Community Service Learning", text: "Our idea helps farmers, plant sellers, and the environment." },
          { label: "Dynamic Movement", text: "We kept moving through ideas fast and didn't give up when one didn't work." },
          { label: "Holistic Thinking", text: "We thought about the whole system: plants, shipping, soil, and waste." },
          { label: "Creative Expression", text: "We had to come up with new ways to use polymers." },
          { label: "Effective Communication", text: "We shared ideas and research with the group so everyone was on the same page." },
          { label: "Confident Identity", text: "We stuck with our idea because we believed it could actually work." }
        ]
      },
      {
        heading: "Problem Solving Process",
        body: [
          { list: [
            "Asked the main question about keeping plants hydrated",
            "Looked up how S.A.P.s work and what kinds are safe for soil",
            "Compared polymer beads vs. potassium polymer in soil",
            "Picked the idea that made the most sense: potassium + biodegradable cups",
            "Started planning what materials and tests we'd need"
          ] }
        ]
      },
      {
        heading: "Challenges & Solutions",
        body: [
          { label: "Challenge", text: "We didn't know which idea would actually work best. Solution: we did more research until we found which one was most efficient and least toxic." },
          { label: "Challenge", text: "Figuring out what materials we needed. Solution: we made a list and planned to get supplies." },
          { label: "Reflection", text: "We learned that even simple ideas can get complicated fast, and that doing research helps a lot when you're unsure." }
        ]
      },
      {
        heading: "Materials",
        body: [
          { label: "Materials", text: "Potassium polyacrylate (polymer), regular soil, biodegradable cups, plants for testing, water." },
          { label: "Tools", text: "Measuring cups, a data sheet/notebook for results." }
        ]
      },
      {
        heading: "Achievements & Growth",
        body: [
          { label: "Achievements", text: "Came up with a working idea using S.A.P.s and biodegradable cups; figured out how to make plant shipping less toxic and cheaper; learned about different polymers and how they hold water." },
          { label: "Growth", text: "Got better at researching real-world materials; learned how to work together as a team and actually agree on something; started thinking more like problem solvers instead of just guessing." }
        ]
      },
      {
        heading: "Goals for Next Project",
        body: [
          { list: [
            "Get all the materials and actually test the polymer soil mix",
            "See which polymer keeps the plant hydrated the longest",
            "Learn more about different kinds of biodegradable materials",
            "Make the final prototype look more professional",
            "Present our data in a clear way so people get the idea"
          ] }
        ]
      }
    ]
  },
  {
    id: "honey-bee-role-project",
    course: "Honey Bee Role Project",
    year: "2025-26",
    title: "Honey Bee Habitat Expansion: Forester Role",
    sections: [
      {
        heading: "Project Overview",
        body: [
          "In this project we each got assigned our \"expert\" roles. Each of us researched our own role. After we got our role we got into groups for where our role was needed: mine was the Honey Bee Habitat Expansion."
        ]
      },
      {
        heading: "My Role",
        body: [
          { label: "Role", text: "Forester." },
          { label: "Core Lens", text: "Managing forests for timber, biodiversity, and recreation. Leaving forests untouched maximizes ecological benefits, while responsible timber harvesting balances human needs with ecosystem health. The key is sustainable management to get the best of both worlds." },
          { label: "Mentor Prompt", text: "How can forest management serve both people and ecosystems? By using resources sustainably, protecting habitats, storing carbon, conserving water and soil, and involving communities. It balances human needs with environmental health." },
          { label: "Vocabulary: Canopy", text: "The upper layer of a forest formed by the crowns of trees. It provides shade, habitat, and regulates temperature and light for the plants and animals below." },
          { label: "Vocabulary: Succession", text: "The natural process by which ecosystems change over time, with one group of plants and animals gradually being replaced by another until a stable ecosystem develops." },
          { label: "Vocabulary: Silviculture", text: "The practice of managing and cultivating forests to meet specific goals, such as timber production, wildlife habitat, or ecosystem health." }
        ]
      }
    ]
  }
];
