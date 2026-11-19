/**
 * AXIS Scientific Club - Official Website Script
 * Bilingual (EN/AR), Dark/Light Theme, Countdown, Animations & Form Handling
 */

// -------------------------------------------------------------
// Translations Data Object (Single source of truth for all text)
// -------------------------------------------------------------
const translations = {
  en: {
    // Brand & Meta
    club_name: "AXIS Scientific Club",
    club_acronym: "AXIS",
    club_type: "Scientific Club",
    univ_name: "Faculty of Economics, Commerce, and Management Sciences at Constantine 2 University",
    tagline: "We connect theory with practice in economics and management, honing your leadership skills.",
    page_title: "AXIS Scientific Club | Connecting Theory with Practice",
    
    // Navigation
    nav_home: "Home",
    nav_group_who: "Who We Are",
    nav_group_what: "What We Do",
    nav_group_activities: "Activities",
    nav_approach: "Our Approach",
    nav_registration: "Join Us",
    nav_about: "About Us",
    nav_focus: "Focus Areas",
    nav_skills: "Skills",
    nav_events: "Events & Projects",
    nav_roadmap: "Roadmap",
    nav_offer: "What We Offer",
    nav_team: "Team",
    nav_vision: "Guiding Principle",
    nav_contact: "Contact",
    nav_cta: "Register Now",
    lang_toggle_label: "العربية",
    theme_toggle_dark: "Switch to Light Mode",
    theme_toggle_light: "Switch to Dark Mode",
    menu_open: "Open navigation menu",
    menu_close: "Close navigation menu",

    // Hero Section
    hero_badge: "Faculty of Economics, Commerce, and Management Sciences at Constantine 2 University",
    hero_title_lead: "AXIS",
    hero_title_sub: "Scientific Club",
    hero_tagline: "We connect theory with practice in economics and management, honing your leadership skills.",
    hero_intro: "At AXIS, learning extends beyond lecture halls. We bridge economics, management, and real-world application by empowering students through hands-on experience, collaborative participation, and leadership development.",
    hero_cta_approach: "Explore Our Approach",
    hero_cta_discover: "Discover the Club",
    hero_cta_register: "Register Now",
    hero_perk_1: "Turning Knowledge into Practice",
    hero_perk_2: "Growth Begins with Participation",
    hero_perk_3: "Developing Skills Alongside Knowledge",
    hero_perk_4: "Building an ambitious and cohesive student community",

    // Registration Portal (Homepage Hero)
    reg_badge: "2026 Membership • Open for University Students",
    reg_card_title: "Student Registration",
    reg_card_subtitle: "Register your membership to join AXIS Scientific Club activities",
    reg_fname_label: "First Name",
    reg_fname_placeholder: "Enter your first name",
    reg_lname_label: "Last Name / Surname",
    reg_lname_placeholder: "Enter your surname",
    reg_email_label: "University or Personal Email",
    reg_email_placeholder: "name@example.com",
    reg_major_label: "Major / Field of Study",
    reg_major_placeholder: "e.g. Economics, Accounting, Finance, Management...",
    reg_level_label: "Academic Level / Year",
    reg_level_select: "Select your academic year",
    reg_level_l1: "Bachelor 1st Year (L1)",
    reg_level_l2: "Bachelor 2nd Year (L2)",
    reg_level_l3: "Bachelor 3rd Year (L3)",
    reg_level_m1: "Master 1st Year (M1)",
    reg_level_m2: "Master 2nd Year (M2)",
    reg_level_doc: "Doctorate / PhD",
    reg_source_label: "Where did you hear about the club?",
    reg_source_select: "Select referral source",
    reg_source_campus: "University Posters & QR Banners",
    reg_source_event: "AXIS Open Days (November 22, 23 & 24)",
    reg_source_social: "Social Media (Instagram / TikTok)",
    reg_source_friend: "Friend or Fellow Student",
    reg_source_prof: "Faculty / University Staff",
    reg_source_other: "Other Source",
    reg_interest_label: "Which area interests you most?",
    reg_interest_select: "Select your primary interest",
    reg_interest_p1: "Learning Beyond the Classroom & Practice",
    reg_interest_p2: "Applied Projects (Knowledge into Practice)",
    reg_interest_p3: "Teamwork, Debates & Active Participation",
    reg_interest_p4: "Holistic Skills (Leadership & Critical Thinking)",
    reg_interest_p5: "Building an Ambitious & Cohesive Student Community",
    reg_interest_econ: "Economics & Accounting",
    reg_interest_tech: "Management & Organizational Practice",
    reg_interest_inno: "Innovation & Entrepreneurship",
    reg_interest_trans: "Turning Creative Ideas into Real Projects",
    reg_interest_events: "Event Organization & Media",
    
    // Registration: What can you offer and add
    reg_offer_label: "What can you offer and add to the AXIS Club?",
    reg_offer_help: "Choose the areas in which you believe you possess skills, abilities, or interests that can contribute to the club's development and add value to it.",
    reg_offer_placeholder: "Select your contribution areas (multiple selections allowed)",
    reg_offer_selected_suffix: "areas selected",
    reg_offer_done_btn: "Done",
    reg_offer_count_zero: "No areas selected",
    reg_offer_opt_1: "Graphic Design",
    reg_offer_opt_2: "Content Creation and Social Media Management",
    reg_offer_opt_3: "Event Planning and Management",
    reg_offer_opt_4: "Communication and Public Relations",
    reg_offer_opt_5: "Programming, Website and Application Development",
    reg_offer_opt_6: "Technology, Artificial Intelligence, and Innovation",
    reg_offer_opt_7: "Accounting, Finance, and Management",
    reg_offer_opt_8: "Scientific Research, Analysis, and Data Collection",
    reg_offer_opt_9: "Presentation, Public Speaking, and Event Facilitation",
    reg_offer_opt_10: "Photography, Video Editing, and Video Production",
    reg_offer_opt_11: "Writing, Editing, and Content Creation",
    reg_offer_opt_12: "Leadership, Teamwork, and Team Management",
    reg_offer_opt_13: "Contributing New Ideas, Initiatives, and Projects",
    reg_offer_opt_14: "Contributing and Learning in Various Fields",
    reg_offer_opt_15: "Other Field (Please Specify)",
    reg_offer_other_placeholder: "Please specify your other field...",
    reg_extra_skill_label: "Do you have another skill, idea, or talent that you believe could benefit the AXIS Club?",
    reg_extra_skill_placeholder: "Tell us about any additional skill, idea, or talent...",

    reg_motivation_label: "Why do you want to join AXIS?",
    reg_motivation_placeholder: "Tell us about your interests, motivations, or skills you want to build...",
    reg_submit_btn: "Submit Registration",
    reg_submitting: "Submitting Registration...",
    reg_error_required: "Please fill in all required fields marked with *.",
    reg_error_email: "Please enter a valid university or personal email address.",
    reg_error_offer: "Please select at least one area you can contribute to.",
    reg_success_title: "Registration Confirmed!",
    reg_success_subtitle: "Welcome to AXIS Scientific Club! Your membership application has been received.",
    reg_receipt_id_label: "Registration Reference:",
    reg_receipt_name_label: "Member Name:",
    reg_receipt_email_label: "Registered Email:",
    reg_receipt_major_label: "Field of Study:",
    reg_receipt_source_label: "Referral Source:",
    reg_receipt_date_label: "Submission Date:",
    reg_receipt_status_badge: "Pending Club Welcome Session",
    reg_reset_btn: "Register Another Student",
    
    // Countdown Box
    countdown_title: "Open Days",
    countdown_subtitle: "November 22, 23 & 24, 2026",
    countdown_date_badge: "Nov 22 – 24, 2026 • 09:30 – 14:30",
    countdown_target_note: "Counting down to the next Open Day",
    media_placeholder_badge: "Photo / Logo Placeholder",
    contact_affiliation_label: "Affiliation",
    contact_website_val: "AXIS Portal (This Site)",
    time_days: "Days",
    time_hours: "Hours",
    time_minutes: "Minutes",
    time_seconds: "Seconds",
    countdown_live: "An Open Day is live now!",
    countdown_ended: "Open Days concluded successfully",
    openday_schedule_title: "Open Days Schedule",
    openday_month: "Nov",
    openday_1_label: "First Open Day",
    openday_1_faculty: "Faculty of Economic Sciences",
    openday_2_label: "Second Open Day",
    openday_2_faculty: "Faculty of Science, Technology and Information Technology",
    openday_3_label: "Third Open Day",
    openday_3_faculty: "Faculty of Business and Accounting Sciences",
    openday_status_upcoming: "Upcoming",
    openday_status_next: "Next up",
    openday_status_live: "Live now",
    openday_status_done: "Completed",

    // Approach Section
    section_approach_tag: "Educational Creed",
    section_approach_title: "AXIS Learning & Development Approach",
    section_approach_subtitle: "Bridging university education with practical experience, active student participation, and purposeful innovation",
    pillar_1_badge: "Pillar 01",
    pillar_1_title: "1. Turning Knowledge into Practice",
    pillar_1_desc: "AXIS Club believes that learning is not limited to receiving information within university lecture halls, but extends to experience, practice, and interaction with the real world. The club focuses on encouraging members to use what they learn to solve problems, implement ideas, and participate in applied projects.",
    pillar_2_badge: "Pillar 02",
    pillar_2_title: "2. Growth Begins with Participation",
    pillar_2_desc: "AXIS places great importance on member participation, recognizing that every student has ideas and abilities that can add value to the group. Discussion, the exchange of perspectives, and teamwork are therefore essential elements of the learning and development process.",
    pillar_3_badge: "Pillar 03",
    pillar_3_title: "3. Developing Skills Alongside Knowledge",
    pillar_3_desc: "The club's objectives go beyond academic development. It also focuses on personal growth by strengthening communication, leadership, critical thinking, creativity, teamwork, and a sense of responsibility.",
    pillar_4_badge: "Pillar 04",
    pillar_4_title: "4. Turning Your Creative Ideas into Reality within an Ambitious Student Community",
    pillar_4_desc: "AXIS gives every member a space to pitch creative ideas, refine them with peers, and carry them out as real projects, events, and initiatives, strengthening the bonds of an ambitious and cohesive student community along the way.",
    principle_tag: "Our Guiding Principle",
    principle_banner_title: "Our Guiding Principle",
    guiding_principle_quote: "“At AXIS, we do not simply seek to know things; we strive to understand them, explore them, apply them, and improve upon them. Because true learning begins when knowledge turns into practice, ideas become experiences, and experiences develop into skills.”",
    guiding_principle_author: "AXIS Scientific Club • Learning & Development Charter",

    // About Section
    section_about_tag: "Who We Are",
    section_about_title: "Bridging Theory and Practice for the Future",
    about_text_p1: "AXIS is a scientific club that connects theory with practice in economics and management. Through hands-on activities, collaborative projects, and leadership development, the club encourages students to hone their leadership skills, turn their creative ideas into reality, and grow within an ambitious and cohesive student community.",
    about_founding_lead: "Founded in 2026",
    about_founding_text: "Established on the initiative of a passionate group of students, proudly led by president Khadija.",
    about_img_caption: "AXIS Scientific Club • Official Identity",
    about_objectives_title: "Key Objectives",
    obj_1_title: "Culture of Innovation",
    obj_1_desc: "Promote a culture of initiative, creativity, and entrepreneurship in economics and management.",
    obj_2_title: "Scientific Exchange",
    obj_2_desc: "Create an interactive scientific environment for exchanging knowledge and experience among students.",
    obj_3_title: "Innovative Solutions",
    obj_3_desc: "Discover innovative solutions to the challenges facing organizations in the modern business world.",
    obj_4_title: "Leadership & Practical Skills",
    obj_4_desc: "Develop students' leadership and managerial skills and connect them to practical application.",
    obj_5_title: "Community Engagement",
    obj_5_desc: "Organize awareness and community activities alongside scientific ones.",

    // Founding Story Q&A
    founding_faq_tag: "Origins & Foundation",
    founding_faq_title: "How AXIS Was Founded",
    founding_faq_subtitle: "The story, motivation, and leadership behind the creation of AXIS Scientific Club, answered in questions",
    faq_q1_badge: "Q1",
    faq_q2_badge: "Q2",
    faq_q3_badge: "Q3",
    faq_q4_badge: "Q4",
    faq_q5_badge: "Q5",
    faq_q1: "When was AXIS Scientific Club founded, and at which university?",
    faq_a1: "AXIS was founded in 2026 at the Faculty of Economics, Commerce, and Management Sciences at Constantine 2 University, established as an active student hub bridging economic and management theory with practice.",
    faq_q2: "Who took the initiative to establish the club?",
    faq_a2: "The club was founded through an ambitious initiative by a group of students from the Faculty of Economics, Commerce, and Management Sciences, headed by Khadija.",
    faq_q3: "What inspired the creation of AXIS?",
    faq_a3: "The club was born from the vision to connect theory with practice in economics and management, and to build an ambitious, cohesive student community that develops leadership skills.",
    faq_q4: "How does the club foster student development?",
    faq_a4: "By encouraging students to practice leadership, develop creative ideas, and collaborate on projects that combine academic knowledge with real-world application, alongside community awareness activities.",
    faq_q5: "What guiding vision drives the club from day one?",
    faq_a5: "To contribute to building a generation that combines economic and managerial thinking with strong leadership skills, capable of turning creative ideas into reality within an ambitious student community.",

    // Focus Areas Section
    section_focus_tag: "Core Pillars",
    section_focus_title: "Our Focus Areas",
    section_focus_subtitle: "Fostering excellence in economics, management, and leadership",
    focus_1_title: "Economics & Accounting",
    focus_1_desc: "Modern economic models and their connection to reality, and the study of markets and their impact on decision-making.",
    focus_2_title: "Leadership & Management",
    focus_2_desc: "Leadership styles, team management, decision making, and organizational skills for future managers.",
    focus_3_title: "Innovation & Entrepreneurship",
    focus_3_desc: "Creative ideation, venture thinking, business modeling, and problem-solving methodologies for ambitious students.",
    focus_4_title: "Ambitious Student Community",
    focus_4_desc: "Building a cohesive community of ambitious students who learn, share, and grow together.",

    // Skills Section
    section_skills_tag: "Competency Development",
    section_skills_title: "Skills We Cultivate",
    section_skills_subtitle: "Core analytical, managerial, and leadership competencies developed through AXIS activities and projects",
    skill_cat_1_title: "Economic & Financial Analysis",
    skill_cat_1_desc: "Refining economic and financial analysis skills and learning to study and understand the movement and trends of financial markets.",
    skill_tag_invest_decision: "Investment Decision",
    skill_tag_econ_analysis: "Economic Analysis",
    skill_tag_market_res: "Market Research",
    skill_cat_2_title: "Management & Leadership",
    skill_cat_2_desc: "Developing leadership, decision-making, planning, and organizational skills applied to real management situations.",
    skill_tag_leadership: "Leadership Skills",
    skill_tag_decision: "Decision Making",
    skill_tag_planning: "Strategic Planning",
    skill_tag_team_mgmt: "Team Management",
    skill_cat_3_title: "Innovation & Venture Design",
    skill_cat_3_desc: "Transforming concepts into viable models using design thinking, pitch crafting, and agile problem solving.",
    skill_tag_design_thinking: "Design Thinking",
    skill_tag_bmc: "Business Model Canvas",
    skill_tag_pitch: "Pitch Presentation",
    skill_tag_problem_solving: "Creative Solutions",
    skill_cat_4_title: "Leadership & Collaboration",
    skill_cat_4_desc: "Fostering interdisciplinary teamwork, scientific event planning, public presentation, and social engagement.",
    skill_tag_teamwork: "Agile Teamwork",
    skill_tag_public_speaking: "Public Speaking",
    skill_tag_event_mgmt: "Event Management",
    skill_tag_community: "Social Responsibility",

    // Events & Projects Section
    section_events_tag: "Initiatives & Activities",
    section_events_title: "Events & Projects",
    section_events_subtitle: "Engaging initiatives combining scientific discovery, leadership skills, and practical learning",
    event_featured_badge: "Featured • Open Days",
    event_1_title: "Open Days",
    event_1_concept: "Three Open Days introducing AXIS Scientific Club, its approach to learning and development, and welcoming students to join and explore its activities.",
    event_meta_aud_label: "Target Audience",
    event_meta_aud_val: "University students",
    event_day_date_label: "Date",
    event_day_time_label: "Time",
    event_day_loc_label: "Location",
    event_day_time_val: "09:30 – 14:30",
    event_day1_date: "November 22, 2026",
    event_day2_date: "November 23, 2026",
    event_day3_date: "November 24, 2026",
    event_space_title: "Club Space & Interactive Presence",
    event_space_desc: "Informational banners and QR codes leading students directly to the club's website.",
    event_goals_title: "Event Goals",
    event_goal_1: "Introduce the AXIS Scientific Club and its approach to learning",
    event_goal_2: "Present interactive workshops, leadership activities, and future projects",
    event_goal_3: "Invite students to explore the website and get involved",
    event_coming_badge: "Upcoming",
    event_2_title: "[Upcoming Project / Event 1]",
    event_2_desc: "The team is planning new events and projects, to be announced soon.",
    event_2_link: "[Link placeholder]",
    event_3_title: "[Upcoming Project / Event 2]",
    event_3_desc: "The team is planning new events and projects, to be announced soon.",
    event_3_link: "[Link placeholder]",

    // Roadmap Section
    section_roadmap_tag: "Our Journey",
    section_roadmap_title: "Club Roadmap",
    section_roadmap_subtitle: "Clear milestones tracking our path from foundation to university-wide impact",
    roadmap_1_date: "2026",
    roadmap_1_title: "Club Founded",
    roadmap_1_desc: "Founded on the initiative of a passionate group of students at the Faculty of Economics, Commerce, and Management Sciences at Constantine 2 University, led by president Khadija.",
    roadmap_2_date: "November 22 – 24, 2026",
    roadmap_2_title: "Open Days",
    roadmap_2_desc: "Inaugural public events: three Open Days on November 22 (Faculty of Economic Sciences), November 23 (Faculty of Science, Technology and Information Technology) and November 24 (Faculty of Business and Accounting Sciences), each from 09:30 to 14:30, introducing AXIS to the student community.",
    roadmap_3_date: "Upcoming",
    roadmap_3_title: "New Projects & Workshops",
    roadmap_3_desc: "The team is actively planning new scientific workshops, leadership training sessions, and economics and management projects to be announced soon.",

    // What We Offer Section
    section_offer_tag: "Value for Students",
    section_offer_title: "What We Offer",
    section_offer_subtitle: "Empowering university students through specialized and practical programs",
    offer_1_title: "Scientific Workshops & Talks",
    offer_1_desc: "Interactive seminars and talks connecting economic and management theory with real-world practice.",
    offer_2_title: "Innovation & Entrepreneurship",
    offer_2_desc: "Collaborative platforms for students to develop creative ideas into actionable business initiatives.",
    offer_3_title: "Leadership Skills Development",
    offer_3_desc: "Practical opportunities to build communication, teamwork, decision-making, and leadership skills through hands-on activities.",
    offer_4_title: "Community Awareness Activities",
    offer_4_desc: "Social and awareness initiatives reinforcing student responsibility alongside academic excellence.",

    // Team Section
    section_team_tag: "Student Leadership",
    section_team_title: "Meet the Team",
    section_team_subtitle: "The dedicated student leaders and department heads steering AXIS Scientific Club, led by club president Khadidja.",
    team_member_1_name: "Khadidja",
    team_member_1_role: "Club President",
    team_member_1_dept: "Executive Leadership & Founder",
    team_member_2_name: "Louai",
    team_member_2_role: "Vice President",
    team_member_2_dept: "Executive Board",
    team_member_3_name: "Aziz",
    team_member_3_role: "General Secretary",
    team_member_3_dept: "Secretariat & Administration",
    team_member_4_name: "Hadil",
    team_member_4_role: "Head of HR Department (GRH)",
    team_member_4_dept: "Human Resources",
    team_member_5_name: "Hana",
    team_member_5_role: "President — Organization & Activities",
    team_member_5_dept: "Events, Logistics & Activities",
    team_member_6_name: "[To Be Announced]",
    team_member_6_role: "Vice President — Organization & Activities",
    team_member_6_dept: "Events, Logistics & Activities",
    team_member_7_name: "Amir",
    team_member_7_role: "Head of Public Relations",
    team_member_7_dept: "Public Relations",
    team_member_8_name: "Hajer",
    team_member_8_role: "Deputy Head of Public Relations",
    team_member_8_dept: "Public Relations",
    team_member_9_name: "Aya",
    team_member_9_role: "President — Media Department",
    team_member_9_dept: "Media & Communications",
    team_placeholder_name: "[To Be Announced]",
    team_placeholder_role: "[Role / Major placeholder]",
    team_member_prefix: "Member #",

    // Vision Section (Our Guiding Principle)
    section_vision_tag: "Guiding North Star",
    section_vision_title: "Our Guiding Principle",
    vision_quote: "“At AXIS, we do not simply seek to know things; we strive to understand them, explore them, apply them, and improve upon them. Because true learning begins when knowledge turns into practice, ideas become experiences, and experiences develop into skills.”",
    vision_author: "AXIS Scientific Club",

    // Contact / Join Section
    section_contact_tag: "Get in Touch",
    section_contact_title: "Join the Club & Connect",
    section_contact_subtitle: "Ready to turn your creative ideas into reality? Apply to join AXIS or reach out to us directly.",
    contact_info_title: "Club Details",
    contact_website_label: "Official Website",
    contact_social_title: "Social Channels",
    contact_instagram: "@axisscientific.club on Instagram",
    contact_tiktok: "@axis.scientificclub on TikTok",
    contact_email: "axisscientific.club@gmail.com",
    form_title: "Join the Club",
    form_subtitle: "Submit your details to join the AXIS student community",
    form_name_label: "Your Name",
    form_name_placeholder: "Enter your full name",
    form_email_label: "Your University / Personal Email",
    form_email_placeholder: "name@example.com",
    form_message_label: "Why do you want to join AXIS? / Your Message",
    form_message_placeholder: "Tell us about your major, interests, or what you hope to achieve with AXIS...",
    form_submit_btn: "Join the Club",
    form_sending: "Submitting application...",
    form_success_msg: "Thank you for applying! Your request to join AXIS has been received. We will contact you soon.",
    form_error_required: "Please fill in all required fields.",
    form_error_email: "Please enter a valid email address.",

    // Footer
    footer_desc: "Connecting theory with practice in economics and management, and building an ambitious and cohesive student community.",
    footer_quick_links: "Quick Links",
    footer_copyright: "© 2026 AXIS Scientific Club. All rights reserved.",
    footer_back_to_top: "Back to top",
    footer_univ: "Faculty of Economics, Commerce, and Management Sciences at Constantine 2 University"
  },

  ar: {
    // Brand & Meta
    club_name: "نادي AXIS العلمي",
    club_acronym: "AXIS",
    club_type: "النادي العلمي",
    univ_name: "كلية العلوم الاقتصادية والتجارية وعلوم التسيير بجامعة قسنطينة 2",
    tagline: "نربط النظرية بالتطبيق في الاقتصاد والتسيير، ونصقل مهاراتك القيادية.",
    page_title: "نادي AXIS العلمي | نربط النظرية بالتطبيق",

    // Navigation
    nav_home: "الرئيسية",
    nav_group_who: "من نحن",
    nav_group_what: "ماذا نفعل",
    nav_group_activities: "الأنشطة",
    nav_approach: "منهجنا",
    nav_registration: "انضم إلينا",
    nav_about: "عن النادي",
    nav_focus: "مجالات الاهتمام",
    nav_skills: "المهارات",
    nav_events: "الفعاليات والمشاريع",
    nav_roadmap: "مسار النادي",
    nav_offer: "ماذا نقدم",
    nav_team: "الفريق",
    nav_vision: "المبدأ التوجيهي",
    nav_contact: "تواصل معنا",
    nav_cta: "سجّل الآن",
    lang_toggle_label: "English",
    theme_toggle_dark: "التحويل للوضع الفاتح",
    theme_toggle_light: "التحويل للوضع الداكن",
    menu_open: "فتح قائمة التنقل",
    menu_close: "إغلاق قائمة التنقل",

    // Hero Section
    hero_badge: "كلية العلوم الاقتصادية والتجارية وعلوم التسيير بجامعة قسنطينة 2",
    hero_title_lead: "AXIS",
    hero_title_sub: "النادي العلمي",
    hero_tagline: "نربط النظرية بالتطبيق في الاقتصاد والتسيير، ونصقل مهاراتك القيادية.",
    hero_intro: "في نادي AXIS، يمتد التعلم إلى ما وراء قاعات الدراسة؛ لنربط علوم الاقتصاد والتسيير بالتطبيق العملي الواقعي، ونمكّن الطلبة من خلال التجربة والممارسة، المشاركة الفاعلة، وتنمية المهارات القيادية.",
    hero_cta_approach: "استكشف منهجنا",
    hero_cta_discover: "اكتشف النادي",
    hero_cta_register: "سجّل الآن",
    hero_perk_1: "تحويل المعرفة إلى تطبيق وممارسة",
    hero_perk_2: "النمو يبدأ بالمشاركة الفاعلة",
    hero_perk_3: "تطوير المهارات جنباً إلى جنب مع المعرفة",
    hero_perk_4: "بناء مجتمع طلابي طموح ومتماسك",

    // Registration Portal (Homepage Hero)
    reg_badge: "عضوية 2026 • مفتوحة لجميع طلبة الجامعة",
    reg_card_title: "استمارة تسجيل العضوية",
    reg_card_subtitle: "سجّل عضويتك للمشاركة في فعاليات ومشاريع نادي AXIS العلمي",
    reg_fname_label: "الاسم الشخصي",
    reg_fname_placeholder: "أدخل اسمك الشخصي",
    reg_lname_label: "اللقب / اسم العائلة",
    reg_lname_placeholder: "أدخل لقبك",
    reg_email_label: "البريد الإلكتروني الجامعي أو الشخصي",
    reg_email_placeholder: "name@example.com",
    reg_major_label: "التخصص الدراسي / الشعبة",
    reg_major_placeholder: "مثال: علوم مالية ومحاسبية، اقتصاد، تسيير...",
    reg_level_label: "المستوى والسنة الدراسية",
    reg_level_select: "اختر مستواك الدراسي",
    reg_level_l1: "السنة الأولى ليسانس (L1)",
    reg_level_l2: "السنة الثانية ليسانس (L2)",
    reg_level_l3: "السنة الثالثة ليسانس (L3)",
    reg_level_m1: "السنة الأولى ماستر (M1)",
    reg_level_m2: "السنة الثانية ماستر (M2)",
    reg_level_doc: "طور الدكتوراه",
    reg_source_label: "من أين سمعت عن النادي؟",
    reg_source_select: "اختر كيف تعرفت على النادي",
    reg_source_campus: "ملصقات ولافتات الحرم الجامعي ورموز QR",
    reg_source_event: "الأيام المفتوحة للنادي (22 و23 و24 نوفمبر)",
    reg_source_social: "مواقع التواصل الاجتماعي (انستغرام / تيك توك)",
    reg_source_friend: "زميل دراسة أو صديق",
    reg_source_prof: "أساتذة أو إدارة الكلية",
    reg_source_other: "مصدر آخر",
    reg_interest_label: "ما هو المجال الأكثر جذباً لاهتمامك؟",
    reg_interest_select: "اختر مجالك المفضل",
    reg_interest_p1: "التعلم خارج قاعات الدراسة والتطبيق العملي",
    reg_interest_p2: "المشاريع التطبيقية (تحويل المعرفة إلى ممارسة)",
    reg_interest_p3: "العمل الجماعي والنقاش والمشاركة الفاعلة",
    reg_interest_p4: "تطوير المهارات الشخصية والقيادية والتفكير النقدي",
    reg_interest_p5: "بناء مجتمع طلابي طموح ومتماسك",
    reg_interest_econ: "العلوم الاقتصادية والمحاسبية",
    reg_interest_tech: "الممارسة الإدارية والتسيير",
    reg_interest_inno: "الابتكار وريادة الأعمال",
    reg_interest_trans: "تحويل الأفكار الإبداعية إلى مشاريع واقعية",
    reg_interest_events: "تنظيم الفعاليات والإعلام",

    // Registration: What can you offer and add
    reg_offer_label: "ماذا يمكنك أن تقدم وتضيف إلى نادي AXIS؟",
    reg_offer_help: "اختر المجالات التي ترى أنك تملك فيها مهارات أو قدرات أو اهتمامات يمكن أن تساهم في تطوير النادي وتقديم إضافة له.",
    reg_offer_placeholder: "اختر مجالات مساهمتك (يمكنك اختيار أكثر من مجال)",
    reg_offer_selected_suffix: "مجالات محددة",
    reg_offer_done_btn: "تم",
    reg_offer_count_zero: "لم يتم تحديد أي مجال",
    reg_offer_opt_1: "التصميم الجرافيكي",
    reg_offer_opt_2: "صناعة المحتوى وإدارة وسائل التواصل الاجتماعي",
    reg_offer_opt_3: "تنظيم الفعاليات وإدارة الأنشطة",
    reg_offer_opt_4: "التواصل والعلاقات العامة",
    reg_offer_opt_5: "البرمجة وتطوير المواقع والتطبيقات",
    reg_offer_opt_6: "التكنولوجيا والذكاء الاصطناعي والابتكار",
    reg_offer_opt_7: "المحاسبة والمالية والتسيير",
    reg_offer_opt_8: "البحث العلمي والتحليل وجمع البيانات",
    reg_offer_opt_9: "التقديم والإلقاء وتنشيط الفعاليات",
    reg_offer_opt_10: "التصوير والمونتاج وصناعة الفيديو",
    reg_offer_opt_11: "الكتابة والتحرير والتدوين",
    reg_offer_opt_12: "القيادة والعمل الجماعي وإدارة الفرق",
    reg_offer_opt_13: "تقديم أفكار ومبادرات ومشاريع جديدة",
    reg_offer_opt_14: "المساهمة والتعلم في مجالات متعددة",
    reg_offer_opt_15: "مجال آخر (يرجى التحديد)",
    reg_offer_other_placeholder: "يرجى تحديد المجال الآخر...",
    reg_extra_skill_label: "هل تملك مهارة، فكرة أو موهبة أخرى ترى أنها قد تفيد نادي AXIS؟",
    reg_extra_skill_placeholder: "أخبرنا عن أي مهارة، فكرة أو موهبة إضافية تراها مفيدة...",

    reg_motivation_label: "لماذا ترغب في الانضمام إلى نادي AXIS؟",
    reg_motivation_placeholder: "حدثنا عن اهتماماتك، دوافعك أو المهارات التي تود تطويرها معنا...",
    reg_submit_btn: "تأكيد التسجيل",
    reg_submitting: "جاري تأكيد التسجيل...",
    reg_error_required: "يرجى ملء جميع الحقول المطلوبة المؤشرة بـ *.",
    reg_error_email: "يرجى إدخال بريد إلكتروني صالح.",
    reg_error_offer: "يرجى اختيار مجال واحد على الأقل يمكنك المساهمة فيه.",
    reg_success_title: "تم تأكيد تسجيلك بنجاح!",
    reg_success_subtitle: "مرحباً بك في نادي AXIS العلمي! تم استلام طلب عضويتك بنجاح.",
    reg_receipt_id_label: "رقم التسجيل المرجعي:",
    reg_receipt_name_label: "اسم العضو:",
    reg_receipt_email_label: "البريد المسجل:",
    reg_receipt_major_label: "التخصص الدراسي:",
    reg_receipt_source_label: "مصدر التعرف على النادي:",
    reg_receipt_date_label: "تاريخ التسجيل:",
    reg_receipt_status_badge: "في انتظار اللقاء التعريفي للنادي",
    reg_reset_btn: "تسجيل طالب آخر",
    
    // Countdown Box
    countdown_title: "الأيام المفتوحة",
    countdown_subtitle: "22 و23 و24 نوفمبر 2026",
    countdown_date_badge: "22 – 24 نوفمبر 2026 • 09:30 – 14:30",
    countdown_target_note: "العد التنازلي لليوم المفتوح القادم",
    media_placeholder_badge: "مساحة مخصصة للصورة / الشعار",
    contact_affiliation_label: "الانتساب الجامعي",
    contact_website_val: "بوابة نادي AXIS (هذا الموقع)",
    time_days: "أيام",
    time_hours: "ساعات",
    time_minutes: "دقائق",
    time_seconds: "ثوانٍ",
    countdown_live: "يوم مفتوح جارٍ الآن!",
    countdown_ended: "تم اختتام فعاليات الأيام المفتوحة بنجاح",
    openday_schedule_title: "جدول الأيام المفتوحة",
    openday_month: "نوفمبر",
    openday_1_label: "اليوم المفتوح الأول",
    openday_1_faculty: "كلية العلوم الاقتصادية",
    openday_2_label: "اليوم المفتوح الثاني",
    openday_2_faculty: "كلية العلوم والتكنولوجيا وتكنولوجيا المعلومات",
    openday_3_label: "اليوم المفتوح الثالث",
    openday_3_faculty: "كلية علوم الأعمال والمحاسبة",
    openday_status_upcoming: "قريباً",
    openday_status_next: "التالي",
    openday_status_live: "جارٍ الآن",
    openday_status_done: "انتهى",

    // Approach Section
    section_approach_tag: "المنهجية وميثاق التعلم",
    section_approach_title: "منهج التعلم والتطوير في نادي AXIS",
    section_approach_subtitle: "الربط بين التعليم الجامعي والتجربة العملية، المشاركة الطلابية الفاعلة، والابتكار الهادف",
    pillar_1_badge: "المحور ٠١",
    pillar_1_title: "١. تحويل المعرفة إلى تطبيق وممارسة",
    pillar_1_desc: "يؤمن نادي AXIS بأن التعلم لا يقتصر على تلقي المعلومات داخل قاعات المحاضرات الجامعية، بل يمتد إلى التجربة والممارسة والاحتكاك بالعالم الحقيقي. يركز النادي على تشجيع الأعضاء على استخدام ما يتعلمونه في حل المشكلات، وتنفيذ الأفكار، والمشاركة في مشاريع تطبيقية.",
    pillar_2_badge: "المحور ٠٢",
    pillar_2_title: "٢. النمو يبدأ بالمشاركة",
    pillar_2_desc: "يولي AXIS أهمية كبرى لمشاركة الأعضاء، انطلاقاً من أن كل طالب يملك أفكاراً وقدرات يمكن أن تضيف قيمة للمجموعة؛ لذا فإن النقاش، وتبادل وجهات النظر، والعمل الجماعي عناصر أساسية في مسار التعلم والتطوير.",
    pillar_3_badge: "المحور ٠٣",
    pillar_3_title: "٣. تطوير المهارات جنباً إلى جنب مع المعرفة",
    pillar_3_desc: "لا تتوقف أهداف النادي عند التطوير الأكاديمي فقط، بل تهتم أيضاً بالجانب الشخصي من خلال صقل مهارات التواصل، والقيادة، والتفكير النقدي، والإبداع، والعمل الجماعي، وتحمل المسؤولية.",
    pillar_4_badge: "المحور ٠٤",
    pillar_4_title: "٤. تحويل أفكارك الإبداعية إلى واقع ضمن مجتمع طلابي طموح",
    pillar_4_desc: "يمنح AXIS كل عضو مساحة لطرح أفكاره الإبداعية وصقلها مع زملائه ثم تنفيذها في شكل مشاريع وفعاليات ومبادرات حقيقية، لتتعزز بذلك روابط مجتمع طلابي طموح ومتماسك.",
    principle_tag: "مبدؤنا التوجيهي",
    principle_banner_title: "مبدؤنا التوجيهي",
    guiding_principle_quote: "«في AXIS، نحن لا نسعى لمجرد المعرفة فقط، بل نسعى لفهمها واستكشافها وتطبيقها وتحسينها. لأن التعلم الحقيقي يبدأ عندما تتحول المعرفة إلى ممارسة، والأفكار إلى تجارب، والتجارب إلى مهارات.»",
    guiding_principle_author: "نادي AXIS العلمي • ميثاق التعلم والتطوير",

    // About Section
    section_about_tag: "من نحن",
    section_about_title: "ربط النظرية بالتطبيق من أجل المستقبل",
    about_text_p1: "نادي AXIS هو نادٍ علمي يربط النظرية بالتطبيق في مجالي الاقتصاد والتسيير. ومن خلال الأنشطة الميدانية والمشاريع التعاونية وتنمية الروح القيادية، يشجّع النادي الطلبة على صقل مهاراتهم القيادية، وتحويل أفكارهم الإبداعية إلى واقع، والنمو داخل مجتمع طلابي طموح ومتماسك.",
    about_founding_lead: "تأسس في عام 2026",
    about_founding_text: "تأسس النادي بمبادرة من مجموعة من الطلبة، برئاسة خديجة.",
    about_img_caption: "نادي AXIS العلمي • الهوية البصرية الرسمية",
    about_objectives_title: "أهداف النادي",
    obj_1_title: "ثقافة الابتكار",
    obj_1_desc: "تعزيز ثقافة المبادرة والإبداع وريادة الأعمال في مجالي الاقتصاد والتسيير.",
    obj_2_title: "البيئة العلمية التفاعلية",
    obj_2_desc: "خلق بيئة علمية تفاعلية لتبادل المعرفة والخبرات بين الطلبة.",
    obj_3_title: "الحلول المبتكرة",
    obj_3_desc: "استكشاف حلول مبتكرة للتحديات التي تواجه المنظمات في عالم الأعمال الحديث.",
    obj_4_title: "المهارات القيادية والعملية",
    obj_4_desc: "تطوير المهارات القيادية والإدارية للطلبة وربطها بالتطبيق العملي.",
    obj_5_title: "الأنشطة المجتمعية",
    obj_5_desc: "تنظيم أنشطة توعوية ومجتمعية إلى جانب الأنشطة العلمية.",

    // Founding Story Q&A
    founding_faq_tag: "البدايات والنشأة",
    founding_faq_title: "كيف تأسس نادي AXIS",
    founding_faq_subtitle: "قصة تأسيس النادي، أهدافه، والقيادة الطلابية التي تقف وراء انطلاقته في شكل أسئلة وأجوبة",
    faq_q1_badge: "س1",
    faq_q2_badge: "س2",
    faq_q3_badge: "س3",
    faq_q4_badge: "س4",
    faq_q5_badge: "س5",
    faq_q1: "متى تأسس نادي AXIS العلمي وفي أي جامعة؟",
    faq_a1: "تأسس نادي AXIS في عام 2026 في كلية العلوم الاقتصادية والتجارية وعلوم التسيير بجامعة قسنطينة 2، ليكون فضاءً علمياً نشطاً يربط النظريات الاقتصادية والتسييرية بالتطبيق العملي.",
    faq_q2: "مَن صاحب المبادرة في تأسيس النادي؟",
    faq_a2: "تأسس النادي بمبادرة طموحة من مجموعة من طلبة كلية العلوم الاقتصادية والتجارية وعلوم التسيير، برئاسة خديجة.",
    faq_q3: "ما الدافع الأساسي وراء إنشاء نادي AXIS؟",
    faq_a3: "نشأ النادي بهدف ربط النظرية بالتطبيق في الاقتصاد والتسيير، وبناء مجتمع طلابي طموح ومتماسك ينمّي المهارات القيادية.",
    faq_q4: "كيف يساهم النادي في تطوير قدرات الطلبة؟",
    faq_a4: "من خلال تشجيع الطلبة على ممارسة القيادة، وتطوير الأفكار الإبداعية، والعمل على مشاريع تجمع بين المعرفة الأكاديمية والتطبيق الواقعي، بالإضافة إلى تنظيم فعاليات توعوية مجتمعية.",
    faq_q5: "ما هي الرؤية التي توجه مستقبل النادي؟",
    faq_a5: "المساهمة في بناء جيل يجمع بين الفكر الاقتصادي والتسييري والمهارات القيادية، وقادر على تحويل الأفكار الإبداعية إلى واقع ضمن مجتمع طلابي طموح.",

    // Focus Areas Section
    section_focus_tag: "الركائز الأساسية",
    section_focus_title: "مجالات الاهتمام",
    section_focus_subtitle: "تعزيز التميز في الاقتصاد والتسيير والقيادة",
    focus_1_title: "العلوم الاقتصادية والمحاسبية",
    focus_1_desc: "النماذج الاقتصادية الحديثة وارتباطها بالواقع، ودراسة الأسواق وتأثيرها على اتخاذ القرار.",
    focus_2_title: "القيادة والتسيير",
    focus_2_desc: "أساليب القيادة، تسيير الفرق، اتخاذ القرار، والمهارات التنظيمية لمسيّري المستقبل.",
    focus_3_title: "الابتكار وريادة الأعمال",
    focus_3_desc: "توليد الأفكار الإبداعية، التفكير الريادي، بناء نماذج الأعمال، ومنهجيات حل المشكلات للطلبة الطموحين.",
    focus_4_title: "مجتمع طلابي طموح",
    focus_4_desc: "بناء مجتمع متماسك من الطلبة الطموحين يتعلمون ويتشاركون وينمون معاً.",

    // Skills Section
    section_skills_tag: "تطوير الكفاءات",
    section_skills_title: "المهارات التي نطورها",
    section_skills_subtitle: "كفاءات تحليلية وإدارية وقيادية يصقلها الطلبة من خلال أنشطة ومشاريع نادي AXIS",
    skill_cat_1_title: "التحليل الاقتصادي والمالي",
    skill_cat_1_desc: "صقل مهارات التحليل الاقتصادي والمالي وتعلّم دراسة وفهم حركة واتجاهات الأسواق المالية.",
    skill_tag_invest_decision: "القرار الاستثماري",
    skill_tag_econ_analysis: "التحليل الاقتصادي",
    skill_tag_market_res: "دراسات السوق",
    skill_cat_2_title: "الإدارة والقيادة",
    skill_cat_2_desc: "تنمية مهارات القيادة واتخاذ القرار والتخطيط والتنظيم وتطبيقها في مواقف إدارية حقيقية.",
    skill_tag_leadership: "المهارات القيادية",
    skill_tag_decision: "اتخاذ القرار",
    skill_tag_planning: "التخطيط الاستراتيجي",
    skill_tag_team_mgmt: "تسيير الفرق",
    skill_cat_3_title: "الابتكار وبناء المشاريع",
    skill_cat_3_desc: "تحويل الأفكار إلى نماذج عمل قابلة للتطبيق باستخدام التفكير التصميمي وحل المشكلات.",
    skill_tag_design_thinking: "التفكير التصميمي",
    skill_tag_bmc: "مخطط نموذج العمل",
    skill_tag_pitch: "عرض المشاريع والريادة",
    skill_tag_problem_solving: "الحلول الإبداعية",
    skill_cat_4_title: "القيادة والعمل الجماعي",
    skill_cat_4_desc: "تطوير مهارات العمل الجماعي متعدد التخصصات، إدارة الفعاليات، الإلقاء، والمشاركة المجتمعية.",
    skill_tag_teamwork: "العمل الجماعي المرن",
    skill_tag_public_speaking: "الإلقاء والتحدث العام",
    skill_tag_event_mgmt: "إدارة الفعاليات",
    skill_tag_community: "المسؤولية المجتمعية",

    // Events & Projects Section
    section_events_tag: "الأنشطة والمبادرات",
    section_events_title: "الفعاليات والمشاريع",
    section_events_subtitle: "مبادرات تفاعلية تجمع بين الاستكشاف العلمي، المهارات القيادية، والتعلم التطبيقي",
    event_featured_badge: "الحدث المميز • الأيام المفتوحة",
    event_1_title: "الأيام المفتوحة",
    event_1_concept: "ثلاثة أيام مفتوحة تعريفية وتفاعلية للتعريف بنادي AXIS العلمي ومنهجه في التعلم والتطوير، واستقبال الطلبة للانضمام إلى أنشطته ومبادراته.",
    event_meta_aud_label: "الجمهور المستهدف",
    event_meta_aud_val: "طلبة الجامعة",
    event_day_date_label: "التاريخ",
    event_day_time_label: "الوقت",
    event_day_loc_label: "المكان",
    event_day_time_val: "من 09:30 إلى 14:30",
    event_day1_date: "22 نوفمبر 2026",
    event_day2_date: "23 نوفمبر 2026",
    event_day3_date: "24 نوفمبر 2026",
    event_space_title: "مساحة النادي والحضور التفاعلي",
    event_space_desc: "لافتات إعلامية ورموز QR تقود الطلبة مباشرة إلى الموقع الإلكتروني للنادي.",
    event_goals_title: "أهداف الفعالية",
    event_goal_1: "التعريف بنادي AXIS العلمي ورسالته ومنهجه التعليمي",
    event_goal_2: "استعراض الورشات التفاعلية والأنشطة القيادية والمشاريع القادمة",
    event_goal_3: "دعوة الطلبة لزيارة الموقع الإلكتروني وتسجيل العضوية",
    event_coming_badge: "قريباً",
    event_2_title: "[مشروع / فعالية قادمة 1]",
    event_2_desc: "الفريق بصدد التخطيط لفعاليات ومشاريع جديدة، سيتم الإعلان عنها قريباً.",
    event_2_link: "[رابط تجريبي - سيضاف لاحقاً]",
    event_3_title: "[مشروع / فعالية قادمة 2]",
    event_3_desc: "الفريق بصدد التخطيط لفعاليات ومشاريع جديدة، سيتم الإعلان عنها قريباً.",
    event_3_link: "[رابط تجريبي - سيضاف لاحقاً]",

    // Roadmap Section
    section_roadmap_tag: "مسيرتنا",
    section_roadmap_title: "مسار النادي",
    section_roadmap_subtitle: "محطات رئيسية ترسم انطلاقتنا وأثرنا في الوسط الجامعي",
    roadmap_1_date: "2026",
    roadmap_1_title: "تأسيس النادي",
    roadmap_1_desc: "تأسس النادي في عام 2026 بمبادرة من مجموعة من طلبة كلية العلوم الاقتصادية والتجارية وعلوم التسيير بجامعة قسنطينة 2، برئاسة خديجة.",
    roadmap_2_date: "22 – 24 نوفمبر 2026",
    roadmap_2_title: "الأيام المفتوحة",
    roadmap_2_desc: "الحدث العام الافتتاحي: ثلاثة أيام مفتوحة، الأول في 22 نوفمبر بكلية العلوم الاقتصادية، والثاني في 23 نوفمبر بكلية العلوم والتكنولوجيا وتكنولوجيا المعلومات، والثالث في 24 نوفمبر بكلية علوم الأعمال والمحاسبة، من 09:30 إلى 14:30، للتعريف بنادي AXIS لدى الطلبة.",
    roadmap_3_date: "قريباً",
    roadmap_3_title: "مشاريع وورشات جديدة",
    roadmap_3_desc: "الفريق بصدد التخطيط لورشات علمية جديدة، ودورات تدريبية في القيادة، ومشاريع في مجالي الاقتصاد والتسيير سيتم الإعلان عنها قريباً.",

    // What We Offer Section
    section_offer_tag: "القيمة المضافة للطلبة",
    section_offer_title: "ماذا نقدم",
    section_offer_subtitle: "برامج متخصصة لتطوير مهارات الطلبة الأكاديمية والعملية",
    offer_1_title: "ورشات وندوات علمية",
    offer_1_desc: "ندوات وجلسات تفاعلية لاستكشاف تقاطع العلوم الاقتصادية والتسييرية مع الواقع العملي.",
    offer_2_title: "مشاريع الابتكار وريادة الأعمال",
    offer_2_desc: "مساحات تعاونية لتطوير الأفكار الإبداعية وتحويلها إلى مبادرات ومشاريع ذات جدوى.",
    offer_3_title: "تطوير المهارات القيادية",
    offer_3_desc: "فرص عملية لاكتساب مهارات التواصل والعمل الجماعي واتخاذ القرار والقيادة من خلال أنشطة ميدانية.",
    offer_4_title: "أنشطة التوعية المجتمعية",
    offer_4_desc: "حملات مجتمعية وتوعوية تؤكد على دور الطالب ومسؤوليته الإيجابية في المجتمع إلى جانب تفوقه العلمي.",

    // Team Section
    section_team_tag: "القيادة الطلابية",
    section_team_title: "فريق العمل",
    section_team_subtitle: "القادة والمسؤولون الطلاب الذين يقودون نادي AXIS ومصالحه التنفيذية، برئاسة خديجة.",
    team_member_1_name: "خديجة",
    team_member_1_role: "رئيسة النادي",
    team_member_1_dept: "القيادة التنفيذية والمؤسسة",
    team_member_2_name: "لؤي",
    team_member_2_role: "نائب رئيس النادي",
    team_member_2_dept: "المكتب التنفيذي",
    team_member_3_name: "عزيز",
    team_member_3_role: "الأمين العام",
    team_member_3_dept: "الأمانة العامة والإدارة",
    team_member_4_name: "هديل",
    team_member_4_role: "مسؤولة مصلحة الموارد البشرية (GRH)",
    team_member_4_dept: "الموارد البشرية",
    team_member_5_name: "هناء",
    team_member_5_role: "رئيسة مصلحة التنظيم والأنشطة",
    team_member_5_dept: "مصلحة التنظيم والفعاليات",
    team_member_6_name: "[يعلن قريباً]",
    team_member_6_role: "نائب رئيس مصلحة التنظيم والأنشطة",
    team_member_6_dept: "مصلحة التنظيم والفعاليات",
    team_member_7_name: "أمير",
    team_member_7_role: "مسؤول مصلحة العلاقات العامة",
    team_member_7_dept: "العلاقات العامة",
    team_member_8_name: "هاجر",
    team_member_8_role: "نائبة رئيس مصلحة العلاقات العامة",
    team_member_8_dept: "العلاقات العامة",
    team_member_9_name: "آية",
    team_member_9_role: "رئيسة مصلحة الإعلام والاتصال",
    team_member_9_dept: "الإعلام والتواصل",
    team_placeholder_name: "[عضو أساسي]",
    team_placeholder_role: "[التخصص / الدور سيحدد لاحقاً]",
    team_member_prefix: "عضو #",

    // Vision Section (Our Guiding Principle)
    section_vision_tag: "بوصلتنا التوجيهية",
    section_vision_title: "مبدؤنا التوجيهي",
    vision_quote: "«في AXIS، نحن لا نسعى لمجرد المعرفة فقط، بل نسعى لفهمها واستكشافها وتطبيقها وتحسينها. لأن التعلم الحقيقي يبدأ عندما تتحول المعرفة إلى ممارسة، والأفكار إلى تجارب، والتجارب إلى مهارات.»",
    vision_author: "نادي AXIS العلمي",

    // Contact / Join Section
    section_contact_tag: "تواصل معنا",
    section_contact_title: "الانضمام إلى النادي والتواصل",
    section_contact_subtitle: "هل أنت مستعد لتحويل أفكارك الإبداعية إلى واقع؟ قدّم طلب انضمامك إلى نادي AXIS أو تواصل معنا مباشرة.",
    contact_info_title: "بيانات النادي",
    contact_website_label: "الموقع الرسمي",
    contact_social_title: "قنوات التواصل",
    contact_instagram: "@axisscientific.club على انستغرام",
    contact_tiktok: "@axis.scientificclub على تيك توك",
    contact_email: "axisscientific.club@gmail.com",
    form_title: "الانضمام إلى النادي",
    form_subtitle: "أدخل بياناتك للانضمام إلى المجتمع الطلابي لنادي AXIS",
    form_name_label: "الاسم الكامل",
    form_name_placeholder: "أدخل اسمك الكامل",
    form_email_label: "البريد الإلكتروني الجامعي أو الشخصي",
    form_email_placeholder: "name@example.com",
    form_message_label: "لماذا ترغب في الانضمام إلى AXIS؟ / رسالتك",
    form_message_placeholder: "حدثنا عن تخصصك، اهتماماتك أو المهارات التي تود تطويرها مع نادي AXIS...",
    form_submit_btn: "الانضمام إلى النادي",
    form_sending: "جاري تقديم الطلب...",
    form_success_msg: "شكراً لطلبك! تم استلام طلب انضمامك إلى نادي AXIS بنجاح، وسنتواصل معك قريباً.",
    form_error_required: "يرجى ملء جميع الحقول المطلوبة.",
    form_error_email: "يرجى إدخال بريد إلكتروني صالح.",

    // Footer
    footer_desc: "نربط النظرية بالتطبيق في الاقتصاد والتسيير، ونبني مجتمعاً طلابياً طموحاً ومتماسكاً لطلبة الجامعة.",
    footer_quick_links: "روابط سريعة",
    footer_copyright: "© 2026 نادي AXIS العلمي. جميع الحقوق محفوظة.",
    footer_back_to_top: "العودة للأعلى",
    footer_univ: "كلية العلوم الاقتصادية والتجارية وعلوم التسيير بجامعة قسنطينة 2"
  }
};

// -------------------------------------------------------------
// State Management
// -------------------------------------------------------------
let currentLang = localStorage.getItem("axis_lang") || "en";
// Default to the official logo-matching sand/linen theme ('light' #E6D6BC)
let currentTheme = localStorage.getItem("axis_theme_v3") || "light";

// Open Days (Local Time), all from 09:30 to 14:30:
//   Nov 22 - Faculty of Economic Sciences
//   Nov 23 - Faculty of Science, Technology and Information Technology
//   Nov 24 - Faculty of Business and Accounting Sciences
const OPEN_DAYS = [
  { start: new Date("2026-11-22T09:30:00").getTime(), end: new Date("2026-11-22T14:30:00").getTime() },
  { start: new Date("2026-11-23T09:30:00").getTime(), end: new Date("2026-11-23T14:30:00").getTime() },
  { start: new Date("2026-11-24T09:30:00").getTime(), end: new Date("2026-11-24T14:30:00").getTime() }
];

// -------------------------------------------------------------
// Initialization on DOMContentLoaded
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initCountdown();
  initScrollAnimations();
  initNavigation();
  initFoundingAccordion();
  initCustomMultiselect();
  initRegistrationForm();
  initContactForm();
  initBackToTop();
  initAmbientMotion();
});

// -------------------------------------------------------------
// Theme Management (Logo Sand Light & Midnight Navy Dark)
// -------------------------------------------------------------
function initTheme() {
  applyTheme(currentTheme);

  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("axis_theme_v3", currentTheme);
      applyTheme(currentTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  
  themeToggleBtns.forEach((btn) => {
    const isDark = theme === "dark";
    btn.setAttribute("aria-label", isDark ? translations[currentLang].theme_toggle_dark : translations[currentLang].theme_toggle_light);
    btn.setAttribute("title", isDark ? translations[currentLang].theme_toggle_dark : translations[currentLang].theme_toggle_light);
    
    // Update icon visually
    const moonIcon = btn.querySelector(".icon-moon");
    const sunIcon = btn.querySelector(".icon-sun");
    if (moonIcon && sunIcon) {
      if (isDark) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
      } else {
        moonIcon.style.display = "inline-block";
        sunIcon.style.display = "none";
      }
    }
  });
}

// -------------------------------------------------------------
// Language & RTL Management
// -------------------------------------------------------------
function initLanguage() {
  applyLanguage(currentLang);

  const langToggleBtns = document.querySelectorAll(".lang-toggle-btn");
  langToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      localStorage.setItem("axis_lang", currentLang);
      applyLanguage(currentLang);
      applyTheme(currentTheme); // refresh theme toggle aria labels for new lang
    });
  });
}

// Sets an element's text. If it also contains child elements (e.g. the chevron <svg>
// in the dropdown buttons), only its own text node is replaced so the children survive.
function setElementText(el, text) {
  if (!el.children.length) {
    el.textContent = text;
    return;
  }
  const own = Array.from(el.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim() !== ""
  );
  if (own) {
    own.nodeValue = text + " ";
  } else {
    el.insertBefore(document.createTextNode(text + " "), el.firstChild);
  }
}

function applyLanguage(lang) {
  const isArabic = lang === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  // Update Page Title
  if (translations[lang] && translations[lang].page_title) {
    document.title = translations[lang].page_title;
  }

  // Update all data-i18n elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key] !== undefined) {
      setElementText(el, translations[lang][key]);
    }
  });

  // Update placeholder attributes
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update aria-label attributes
  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  ariaElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute("aria-label", translations[lang][key]);
    }
  });

  // Update language toggle button label
  const langLabels = document.querySelectorAll(".lang-toggle-label");
  langLabels.forEach((label) => {
    label.textContent = translations[lang].lang_toggle_label;
  });

  // Update document body class for styling adjustments if needed
  if (isArabic) {
    document.body.classList.add("lang-ar");
    document.body.classList.remove("lang-en");
  } else {
    document.body.classList.add("lang-en");
    document.body.classList.remove("lang-ar");
  }

  // Update custom multi-select display text on language change
  if (typeof window.refreshMultiselectDisplay === "function") {
    window.refreshMultiselectDisplay();
  }
}

// -------------------------------------------------------------
// Opening Day Countdown Timer
// -------------------------------------------------------------
function initCountdown() {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");
  const statusEl = document.getElementById("countdown-status-note");
  const dayItems = document.querySelectorAll(".openday-item");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function setZero() {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
  }

  function updateTimer() {
    const now = Date.now();
    const t = translations[currentLang];

    // First Open Day that has not finished yet = the one we count down to
    const nextIndex = OPEN_DAYS.findIndex((d) => now <= d.end);

    // Schedule list: upcoming / next / live / done
    dayItems.forEach((item, i) => {
      const d = OPEN_DAYS[i];
      if (!d) return;
      const state = now > d.end ? "done" : now >= d.start ? "live" : "upcoming";
      const isNext = i === nextIndex && state === "upcoming";
      item.classList.toggle("is-done", state === "done");
      item.classList.toggle("is-live", state === "live");
      item.classList.toggle("is-next", isNext);
      const pill = item.querySelector(".openday-status");
      if (pill) {
        pill.textContent =
          state === "done" ? t.openday_status_done :
          state === "live" ? t.openday_status_live :
          isNext ? t.openday_status_next : t.openday_status_upcoming;
      }
    });

    // All Open Days are over
    if (nextIndex === -1) {
      setZero();
      if (statusEl) {
        statusEl.textContent = t.countdown_ended;
        statusEl.classList.remove("is-live");
      }
      return;
    }

    const target = OPEN_DAYS[nextIndex];

    // An Open Day is happening right now
    if (now >= target.start) {
      setZero();
      if (statusEl) {
        statusEl.textContent = t.countdown_live;
        statusEl.classList.add("is-live");
      }
      return;
    }

    const distance = target.start - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    if (statusEl) {
      statusEl.textContent = t.countdown_target_note;
      statusEl.classList.remove("is-live");
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// -------------------------------------------------------------
// Scroll Animations (IntersectionObserver)
// -------------------------------------------------------------
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target); // Animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach((el) => el.classList.add("revealed"));
  }
}

// -------------------------------------------------------------
// Navigation, Sticky Header, Dropdowns, Mobile Menu & Active Links
// -------------------------------------------------------------
function initNavigation() {
  const header      = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNav   = document.querySelector(".site-nav-links");
  const allNavLinks = document.querySelectorAll(".nav-link, .nav-sub-link");

  // ── Sticky header blur on scroll ───────────────────────────
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 30);
    updateActiveNavLink();
  }, { passive: true });

  // ── Desktop Dropdown: open/close on hover & keyboard ───────
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle  = dropdown.querySelector(".nav-dropdown-toggle");
    const submenu = dropdown.querySelector(".nav-submenu");
    if (!toggle || !submenu) return;

    // Click toggle (keyboard / touch-device friendly)
    toggle.addEventListener("click", (e) => {
      // Mobile: accordion. Desktop: click / Enter / Space also opens and closes the menu.
      const isOpen = dropdown.classList.contains("is-open");
      dropdowns.forEach(d => { if (d !== dropdown) closeDropdown(d); });
      dropdown.classList.remove("is-closing");
      isOpen ? closeDropdown(dropdown) : openDropdown(dropdown);
      e.stopPropagation();
    });

    // Desktop: close the menu when the mouse leaves it
    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 860) {
        closeDropdown(dropdown);
        dropdown.classList.remove("is-closing");
      }
    });

    // Keyboard: Escape closes
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDropdown(dropdown);
    });

    // Submenu links close mobile menu
    submenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeDropdown(dropdown);
        // Desktop: keep the menu hidden after a choice, even while the mouse is still over it
        if (window.innerWidth > 860) dropdown.classList.add("is-closing");
        closeMobileMenu();
      });
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-dropdown")) {
      dropdowns.forEach(closeDropdown);
    }
  });

  function openDropdown(dd) {
    const btn = dd.querySelector(".nav-dropdown-toggle");
    dd.classList.add("is-open");
    btn?.setAttribute("aria-expanded", "true");
  }

  function closeDropdown(dd) {
    const btn = dd.querySelector(".nav-dropdown-toggle");
    dd.classList.remove("is-open");
    btn?.setAttribute("aria-expanded", "false");
  }

  // ── Mobile menu toggle ──────────────────────────────────────
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.contains("active") ? closeMobileMenu() : openMobileMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("active")) closeMobileMenu();
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileNav.classList.contains("active") &&
          !mobileNav.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileNav.classList.add("active");
    mobileToggle.classList.add("is-active");
    mobileToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("mobile-menu-open");
  }

  function closeMobileMenu() {
    mobileNav.classList.remove("active");
    mobileToggle.classList.remove("is-active");
    mobileToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-menu-open");
    // Also close any open dropdown accordions
    dropdowns.forEach(closeDropdown);
  }

  // ── Active section indicator ────────────────────────────────
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        // Clear all active classes
        allNavLinks.forEach(l => l.classList.remove("active"));
        // Mark the matching link (could be a top-level or submenu link)
        const match =
          document.querySelector(`.nav-link[href="#${id}"]`) ||
          document.querySelector(`.nav-sub-link[href="#${id}"]`);
        if (match) match.classList.add("active");
      }
    });
  }

  updateActiveNavLink();
}

// -------------------------------------------------------------
// Contact Form Handling (Client-side validation & feedback)
// -------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("axis-contact-form");
  const statusMsg = document.getElementById("form-status-message");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = form.querySelector("button[type='submit']");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showFormStatus(translations[currentLang].form_error_required, "error");
      return;
    }

    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus(translations[currentLang].form_error_email, "error");
      return;
    }

    // Simulate sending with nice state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLang].form_sending;
    }

    setTimeout(() => {
      showFormStatus(translations[currentLang].form_success_msg, "success");
      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].form_submit_btn;
      }
    }, 800);
  });

  function showFormStatus(msg, type) {
    if (!statusMsg) return;
    statusMsg.textContent = msg;
    statusMsg.className = `form-status-box ${type}`;
    statusMsg.style.display = "block";

    // Auto-scroll slightly if not in view
    statusMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if (type === "success") {
      setTimeout(() => {
        statusMsg.style.display = "none";
      }, 7000);
    }
  }
}

// -------------------------------------------------------------
// Back-to-Top Button
// -------------------------------------------------------------
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// -------------------------------------------------------------
// Founding Story Q&A Accordion
// -------------------------------------------------------------
function initFoundingAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-question-btn");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          const otherBtn = other.querySelector(".faq-question-btn");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });
      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// -------------------------------------------------------------
// Custom Multi-Select List Component
// -------------------------------------------------------------
function initCustomMultiselect() {
  const container = document.getElementById("reg-offer-multiselect");
  const trigger = document.getElementById("reg-offer-trigger");
  const display = document.getElementById("reg-offer-display");
  const dropdown = document.getElementById("reg-offer-dropdown");
  const otherInput = document.getElementById("reg-offer-other");
  const doneBtn = document.getElementById("btn-multiselect-done");
  const countBadge = document.getElementById("multiselect-count-badge");

  if (!container || !trigger || !dropdown) return;

  // Toggle open / close
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = container.classList.contains("is-open");
    isOpen ? closeDropdown() : openDropdown();
  });

  // Keyboard navigation
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      openDropdown();
    } else if (e.key === "Escape") {
      closeDropdown();
    }
  });

  function openDropdown() {
    container.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    container.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
  }

  // Done button inside dropdown
  if (doneBtn) {
    doneBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown();
      trigger.focus();
    });
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && container.classList.contains("is-open")) {
      closeDropdown();
      trigger.focus();
    }
  });

  // Clicking anywhere on the option row toggles checkbox smoothly
  const optionLabels = dropdown.querySelectorAll(".multiselect-option");
  optionLabels.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "input") return;
      e.preventDefault();
      const cb = opt.querySelector("input[type='checkbox']");
      if (cb) {
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event("change"));
      }
    });
  });

  // Checkbox changes
  const checkboxes = dropdown.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      const option = cb.closest(".multiselect-option");
      if (option) {
        option.classList.toggle("is-selected", cb.checked);
      }
      updateDisplay();

      // Show/hide other input
      if (cb.value === "other_field" && otherInput) {
        otherInput.style.display = cb.checked ? "block" : "none";
        if (cb.checked) {
          otherInput.focus();
        } else {
          otherInput.value = "";
        }
      }
    });
  });

  function updateDisplay() {
    if (!display) return;
    const checked = Array.from(dropdown.querySelectorAll("input[type='checkbox']:checked"));
    const t = translations[currentLang] || translations.en;

    // Update count badge in footer
    if (countBadge) {
      if (checked.length === 0) {
        countBadge.textContent = t.reg_offer_count_zero;
      } else {
        countBadge.textContent = `${checked.length} ${t.reg_offer_selected_suffix}`;
      }
    }

    if (checked.length === 0) {
      display.textContent = t.reg_offer_placeholder;
      display.classList.add("is-placeholder");
    } else if (checked.length === 1) {
      const label = checked[0].closest(".multiselect-option")?.querySelector(".multiselect-option-label");
      display.textContent = label ? label.textContent.trim() : checked[0].value;
      display.classList.remove("is-placeholder");
    } else if (checked.length === 2) {
      const labels = checked.map((c) => {
        const l = c.closest(".multiselect-option")?.querySelector(".multiselect-option-label");
        return l ? l.textContent.trim() : c.value;
      });
      display.textContent = labels.join(", ");
      display.classList.remove("is-placeholder");
    } else {
      display.textContent = `${checked.length} ${t.reg_offer_selected_suffix}`;
      display.classList.remove("is-placeholder");
    }
  }

  // Expose helpers for language updates & reset
  window.refreshMultiselectDisplay = updateDisplay;
  window.resetMultiselect = function () {
    checkboxes.forEach((cb) => {
      cb.checked = false;
      const option = cb.closest(".multiselect-option");
      if (option) option.classList.remove("is-selected");
    });
    if (otherInput) {
      otherInput.style.display = "none";
      otherInput.value = "";
    }
    updateDisplay();
    closeDropdown();
  };
}

// -------------------------------------------------------------
// Homepage Registration Form Handling
// -------------------------------------------------------------
function initRegistrationForm() {
  const regForm = document.getElementById("axis-registration-form");
  const receiptCard = document.getElementById("registration-receipt");
  const statusMsg = document.getElementById("reg-status-message");
  const resetBtn = document.getElementById("reg-reset-btn");

  if (!regForm) return;

  regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("reg-firstname")?.value.trim() || "";
    const lastName = document.getElementById("reg-lastname")?.value.trim() || "";
    const email = document.getElementById("reg-email")?.value.trim() || "";
    const major = document.getElementById("reg-major")?.value.trim() || "";
    const levelSelect = document.getElementById("reg-level");
    const sourceSelect = document.getElementById("reg-source");
    const interestSelect = document.getElementById("reg-interest");
    const submitBtn = regForm.querySelector("button[type='submit']");

    const level = levelSelect?.value || "";
    const source = sourceSelect?.value || "";
    const interest = interestSelect?.value || "";

    // Required fields check
    if (!firstName || !lastName || !email || !major || !level || !source || !interest) {
      showRegStatus(translations[currentLang].reg_error_required, "error");
      return;
    }

    // Required multi-select offer check
    const selectedOffers = Array.from(document.querySelectorAll("#reg-offer-dropdown input[type='checkbox']:checked")).map(cb => cb.value);
    if (selectedOffers.length === 0) {
      showRegStatus(translations[currentLang].reg_error_offer || translations[currentLang].reg_error_required, "error");
      const trigger = document.getElementById("reg-offer-trigger");
      if (trigger) trigger.focus();
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showRegStatus(translations[currentLang].reg_error_email, "error");
      return;
    }

    // Simulate sending / registering
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLang].reg_submitting;
    }

    setTimeout(() => {
      // Generate unique registration reference
      const regId = "AXIS-2026-" + Math.floor(1000 + Math.random() * 9000);
      const currentDate = new Date().toLocaleDateString(currentLang === "ar" ? "ar-DZ" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Populate Receipt Card Elements
      const receiptIdEl = document.getElementById("receipt-id-val");
      const receiptNameEl = document.getElementById("receipt-name-val");
      const receiptEmailEl = document.getElementById("receipt-email-val");
      const receiptMajorEl = document.getElementById("receipt-major-val");
      const receiptSourceEl = document.getElementById("receipt-source-val");
      const receiptDateEl = document.getElementById("receipt-date-val");

      if (receiptIdEl) receiptIdEl.textContent = regId;
      if (receiptNameEl) receiptNameEl.textContent = `${firstName} ${lastName}`;
      if (receiptEmailEl) receiptEmailEl.textContent = email;
      if (receiptMajorEl && levelSelect) {
        receiptMajorEl.textContent = `${major} (${levelSelect.options[levelSelect.selectedIndex].text})`;
      }
      if (receiptSourceEl && sourceSelect) {
        receiptSourceEl.textContent = sourceSelect.options[sourceSelect.selectedIndex].text;
      }
      if (receiptDateEl) receiptDateEl.textContent = currentDate;

      // Swap view: hide form, show receipt
      regForm.style.display = "none";
      if (statusMsg) statusMsg.style.display = "none";
      if (receiptCard) {
        receiptCard.style.display = "block";
        receiptCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].reg_submit_btn;
      }
    }, 700);
  });

  // Reset Button to register another student
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      regForm.reset();
      if (typeof window.resetMultiselect === "function") {
        window.resetMultiselect();
      }
      regForm.style.display = "block";
      if (receiptCard) receiptCard.style.display = "none";
      if (statusMsg) statusMsg.style.display = "none";
      regForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function showRegStatus(msg, type) {
    if (!statusMsg) return;
    statusMsg.textContent = msg;
    statusMsg.className = `form-status-box ${type}`;
    statusMsg.style.display = "block";
    statusMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// -------------------------------------------------------------
// Interactive Ambient Motion & Subtle Parallax
// -------------------------------------------------------------
function initAmbientMotion() {
  const canvas = document.querySelector(".ambient-bg-canvas");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const orb1 = canvas.querySelector(".orb-1");
  const orb2 = canvas.querySelector(".orb-2");
  const orb3 = canvas.querySelector(".orb-3");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let isMoving = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateParallax);
      }
    },
    { passive: true }
  );

  function updateParallax() {
    currentX += (mouseX - currentX) * 0.04;
    currentY += (mouseY - currentY) * 0.04;

    if (orb1) {
      orb1.style.translate = `${currentX * -25}px ${currentY * -20}px`;
    }
    if (orb2) {
      orb2.style.translate = `${currentX * 30}px ${currentY * 25}px`;
    }
    if (orb3) {
      orb3.style.translate = `${currentX * -18}px ${currentY * 22}px`;
    }

    if (Math.abs(mouseX - currentX) > 0.001 || Math.abs(mouseY - currentY) > 0.001) {
      requestAnimationFrame(updateParallax);
    } else {
      isMoving = false;
    }
  }
}
