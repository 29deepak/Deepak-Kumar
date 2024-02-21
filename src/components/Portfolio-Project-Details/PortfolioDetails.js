import React from 'react'
import { useParams } from 'react-router-dom'
import './PortfolioDetails.css'
import { FiCornerUpRight } from 'react-icons/fi'
import { FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const PortfolioDetails = () => {
    const { id } = useParams()
    const projectDetails = [
        {
            id: 6,
            title: 'EXPENSE TRACKER APP',
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: 'Our expense tracker is designed to simplify this process by providing users with a comprehensive tool to monitor and analyze their expenses effortlessly. From daily purchases to monthly bills, expenses can quickly add up, making it difficult to maintain a clear understanding of where money is being spent. Our expense tracker addresses this issue by offering a user-friendly platform to record, categorize, and analyze expenses in real-time. By organizing expenses into categories, setting budgets, and generating insightful reports, users can gain a deeper understanding of their spending patterns and identify areas for improvement.',
            features: [{ heading: 'User Authentication with JWT:', details: ['Users can securely register and log in to the expense tracker system.', 'Authentication is implemented using JSON Web Tokens (JWT), ensuring data security and user privacy.', 'Each user receives a unique token upon successful authentication, which is used to authenticate subsequent requests to the server.'] }
                , { heading: "Password Encryption with Bcrypt:", details: ['User passwords are encrypted using the Bcrypt library before storing them in the database.', 'Bcrypt provides a strong and reliable encryption mechanism, protecting user passwords from unauthorized access or breaches.'] },
            { heading: "Integration of Razorpay Payment Gateway:", details: ["Users can make payments securely through the Razorpay payment gateway.", 'Integration with Razorpay facilitates seamless and reliable payment processing for premium features or services within the expense tracker application.'] },
            { heading: 'Reset Password Link with SendGrid:', details: ['Users can reset their passwords conveniently through the use of reset password links.', 'SendGrid integration enables the delivery of email notifications containing password reset links to users registered email addresses.', 'This feature enhances user experience by providing a straightforward method for password recovery.'] },
            {
                heading: 'Pagination for Expenses Page:', details: ['Expenses page is optimized for improved performance and user experience through pagination.', 'Pagination divides the list of expenses into separate pages, reducing load times and enhancing readability.', 'Users can navigate through expense records more efficiently, especially when dealing with large datasets.']
            }, {
                heading: 'Report Generation using AWS S3 Bucket for Premium Users:', details: ['Premium users have access to advanced reporting capabilities, including report generation.', 'Reports are generated and stored securely in an AWS S3 Bucket, ensuring reliability and scalability.', 'Premium users can retrieve and download detailed expense reports for analysis and record-keeping purposes.']
            }, {
                heading: `Leaderboard for Premium Users:`, details: ['Premium users can engage with a leaderboard feature that ranks users based on specific criteria.', 'The leaderboard enhances user engagement and competition among premium users.', 'Users can track their progress and standings within the community, fostering a sense of achievement and recognition.']
            },
            {
                heading: `Logout and Session Management:`, details: ['Users can log out of their accounts to securely end their session.', 'JWT tokens are invalidated upon logout, ensuring that unauthorized access to the account is prevented.', 'Session management mechanisms handle user sessions effectively, providing a seamless and secure experience.']
            }],
            tools: [{ ui: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE"] }, { ui: "Third-party Integrations", tools: ["Razorpay", "Sendgrid"] }, { ui: "Cloud", tools: ["AWS", "EC2 instances", "RDS", "S3 BUCKET", "IAM USER"] }],
            workflow: [{ title: "User Registration and Authentication:", details: ['Users start by accessing the registration page where they provide their details, such as email and password.', 'Upon submission, the backend validates the data and creates a new user account in the database using Sequelize.', 'The users password is encrypted using Bcrypt before storing it in the database to ensure security.', 'Once registered, users can log in using their credentials.', 'During login, the backend verifies the users credentials, generates a JWT token, and sends it back to the client for authentication on subsequent requests.'] }
                , { title: "Expense Management", details: ['After logging in, users can access the expense management section of the application.', 'They can add new expenses by providing details such as date, category, amount, and description.', 'When an expense is added, the frontend sends a request to the backend, which then creates a new expense record in the database using Sequelize.', 'Users can also view, edit, or delete existing expenses, with corresponding CRUD operations performed on the database via Sequelize.'] },
            {
                title: "Reset Password Functionality:", details: ['If users forget their passwords, they can request a password reset by providing their email address.', 'The backend processes the request and generates a unique token for the password reset link.', 'The link containing the token is sent to the users email address using SendGrid integration.', 'Upon clicking the link, users are directed to a page where they can securely reset their password.']
            }, {
                title: "Payment Processing with Razorpay:", details: ['Premium users can access additional features or services by making payments through the Razorpay payment gateway.', 'The frontend initiates the payment request, which is then securely processed by Razorpay.', 'Upon successful payment confirmation from Razorpay, the users premium status is updated in the database, granting access to premium features.']
            }, {
                title: 'Expense Reporting and Pagination:', details: ['Users can generate expense reports for analysis or record-keeping purposes.', 'The backend retrieves expense data from the database using Sequelize queries, aggregates it as needed, and formats it into a report.', 'Premium users reports are stored securely in an AWS S3 Bucket for access and download.', 'Pagination is implemented on the frontend to improve performance and navigation by fetching and displaying expense records in smaller, manageable chunks.']
            }, {
                title: "Leaderboard Feature:", details: ['Premium users can engage with the leaderboard feature to view rankings based on specific criteria.', 'The backend retrieves user data from the database, computes rankings, and sends the leaderboard information to the frontend for display.']
            }, {
                title: "Logout and Session Management:", details: ['When users log out, the JWT token stored on the client side is invalidated.', 'The backend handles session management, ensuring that unauthorized access to user accounts is prevented.']
            }
            ],
            benefits: ['Better financial management and awareness of spending habits', 'Ability to track expenses in real-time', 'Customizable reporting for insights into spending patterns', 'Improved budgeting and financial planning'],
            future_enhancements: ['Multi-user support with shared expenses', 'Integration with financial institutions for automatic expense tracking'],
            conclusion: 'Our application prioritizes scalability and performance, ensuring reliability even as user demand grows. Whether you are an individual budgeter or a premium subscriber seeking enhanced financial insights, our Expense Tracker is your go-to solution for achieving financial goals.'

        }, {
            id: 2,
            title: "E-commerce Website"
        }, {
            id: 1,
            title: "Booking Appointment App"
        }, {
            id: 3,
            title: "Quiz Application"
        }, {
            id: 4,
            title: "Job Portal App"
        },
        {
            id: 5,
            title: "Group Chat App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,

            introduction: "With a user-friendly interface, robust security measures, and customizable options, it ensures a safe and personalized experience for users of all ages and backgrounds. As technology continues to evolve, this chat app remains at the forefront, shaping the future of communication and fostering meaningful connections in a digital world.",

            features: [
                {
                    heading: 'User Authentication:', details: ['Users sign up and log in securely using JSON Web Tokens (JWT) and encrypted passwords with bcrypt.']
                },
                {
                    heading: 'Public Routes:', details: ['Access certain features of the app without needing to sign in.']
                }, {
                    heading: 'Validation: ', details: ['Ensure that public routes are restricted appropriately to maintain security and privacy.']
                }, {
                    heading: 'Limited Access:', details: ['Public routes may include features like viewing available doctors or general information about the services offered.']
                }, {
                    heading: 'Authentication Requirement:', details: ['Certain actions, such as booking appointments or accessing personal profiles, require authentication and are not available through public routes.']
                }, {
                    heading: 'Security Measures:', details: ['Implement secure validation methods to prevent unauthorized access to sensitive data or functionalities.']
                }, {
                    heading: 'Error Handling:', details: ['Handle any attempts to access restricted features gracefully, displaying informative messages and guiding users towards the appropriate actions.']
                }, {
                    heading: 'Enhanced Privacy: ', details: ['Protect user information by ensuring that personal data remains secure and inaccessible through public routes.']
                },
                {
                    heading: 'Private One-on-One Chats:',
                    details: ['Enable users to initiate private conversations with individuals, providing a dedicated space for confidential communication away from group chats and public channels.']
                },

                {
                    heading: 'Group Creation and Management:',
                    details: ['Allow users to create groups and add members, facilitating collaboration and communication within a designated space.', 'Provide group admins with the ability to manage group settings, including adding or removing members and assigning admin privileges to other users.']
                },

                {
                    heading: 'Group Chat Access:',
                    details: ['Display all available groups in a dedicated section within the app, allowing users to easily navigate and select the desired group for communication.', 'Enable users to click on a group to access the group chat interface, where they can engage in discussions with other members in real-time.']
                },
                {
                    "heading": "Logout:",
                    "details": [
                        "Securely log out from your account to ensure the privacy of your information.",
                        "Logout functionality ensures that your session is terminated, preventing unauthorized access to your account.",
                        "Upon logout, users are redirected to the login page to reauthenticate for accessing app features."
                    ]
                }
            ],


            tools: [{ ui: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE", "SOCKET"] }, { ui: "Cloud", tools: ["AWS", "EC2 instances", "RDS", "S3 BUCKET", "IAM USER"] }],
            workflow: [
                {
                    title: "User Registration and Login Process:",
                    details: [
                        "New users register by providing their details, including email and password.",
                        "Upon successful registration, users are prompted to log in to access the app's features.",
                        "To log in, users enter their email and password combination.",
                        "The login process verifies the entered credentials against the database to authenticate the user.",
                        "If the credentials are valid, the user is granted access to the app's functionalities.",
                        "Invalid credentials result in an error message prompting users to re-enter their login information.",
                        "The app employs security measures such as encryption to safeguard user passwords during transmission and storage.",
                        "Additionally, measures like CAPTCHA may be implemented to prevent automated login attempts and enhance security.",
                        "Forgot password functionality may also be provided, allowing users to reset their passwords through email verification."
                    ]
                },
                {
                    title: "Logout and Session Management:",
                    details: [
                        "When users log out, the JWT token stored on the client side is invalidated.",
                        "The backend handles session management, ensuring that unauthorized access to user accounts is prevented.",
                        "If a user attempts to access a page after their JWT token has expired, they are redirected to the login page to re-authenticate.",
                        "Upon successful logout, the user's session is terminated, and they are redirected to the login page.",
                        "If the user's session is active and the JWT token is valid, they are directed to the homepage upon logging in without the need to re-enter credentials.",
                        "This approach ensures secure access to the application and protects user accounts from unauthorized access.",
                        "Session expiration and logout mechanisms enhance the overall security of the application by preventing unauthorized access to user accounts."
                    ]
                },
                {
                    title: "Persistent Login State and Protected Routes:",
                    details: [
                        "The app maintains the user's login state persistently, typically using browser cookies or local storage.",
                        "When a user returns to the app after some time, the app checks for the presence of authentication tokens or session data.",
                        "If the user is already logged in (i.e., authentication tokens are present and valid), they are automatically redirected to the homepage or the last accessed page.",
                        "This automatic redirection ensures a seamless user experience without requiring the user to log in again.",
                        "If the user is not logged in (i.e., authentication tokens are missing or expired), they are directed to the login page to authenticate.",
                        "Protected routes within the app are accessible only when the user is authenticated.",
                        "Unauthorized access attempts to protected routes trigger redirection to the login page for authentication.",
                        "This approach ensures that sensitive sections of the app are accessible only to authenticated users, enhancing security and user privacy.",
                        "The persistent login state mechanism streamlines the user experience by maintaining session continuity across app visits."
                    ]
                }, {
                    title: "User Selection for Private Chats:",
                    details: [
                        "Provide a user-friendly interface where users can access a list of all available users for private chats.",
                        "Users can easily browse through the list of users, which may include their contacts or members of a shared group.",
                        "Enable users to select a specific user from the list to initiate a private chat conversation.",
                        "Search and filter functionalities allow users to quickly find and select the desired user from the list, enhancing usability and efficiency.",
                        "User profiles may display relevant information such as name, profile picture, online status, and mutual connections, aiding in user identification and selection.",
                        "In-app messaging features allow users to send direct messages to the selected user, initiating a private chat session between them.",

                    ]
                }, {
                    title: "Private One-on-One Chats:",
                    details: [
                        "Enable users to initiate private conversations with specific individuals, providing a dedicated space for confidential communication away from group chats and public channels.",
                        "Users can easily target and message a specific user, initiating a private conversation thread between them.",
                        "The one-to-one chat interface offers a seamless and intuitive messaging experience, allowing users to exchange messages in real-time.",
                        "Private chats support a variety of multimedia content, including text, images, videos, and files, enhancing communication flexibility and richness.",
                        "Message delivery indicators and read receipts provide users with real-time feedback on the status of their messages, ensuring reliable communication.",
                        "End-to-end encryption ensures the privacy and security of one-to-one conversations, protecting sensitive information from unauthorized access.",
                        "Users have the option to archive or delete private chat conversations, managing their message history and maintaining privacy.",

                    ]
                },
                {
                    title: "Group Creation and Management:",
                    details: [
                        "Provide a dedicated section where users can view their contacts and existing groups, as well as create new groups.",
                        "Users can easily browse through their contacts and existing groups to identify potential members or create a new group.",
                        "The group creation interface allows users to specify group details such as name, description, and privacy settings.",
                        "Admin users have additional privileges, including the ability to create and remove groups, as well as manage group settings and membership.",
                        "Users can add members to the group and assign admin roles as needed, empowering group admins to delegate responsibilities and manage group activities.",
                        "Group admins have full control over group membership, including the ability to add, remove, or modify members.",
                        "Group privacy settings allow users to specify whether the group is public, private, or invite-only, controlling access to group content and conversations.",
                        "Regular updates and enhancements to the group creation and management features ensure usability, security, and user satisfaction."
                    ]
                },
                {
                    title: "Group Chat Functionality:",
                    details: [
                        "Users can access the group section to view a list of all groups they are a member of.",
                        "Within the group section, users can select a specific group to engage in group chat conversations.",
                        "Group chat functionality allows users to send messages to all members of the selected group simultaneously.",
                        "Messages sent in the group chat are displayed in real-time, enabling seamless communication and collaboration among group members.",
                        "Users can share various types of content in the group chat, including text messages, images, videos, and files.",
                        "Group chat conversations maintain a continuous thread, allowing users to view past messages and refer back to previous discussions.",
                        "Group administrators have additional capabilities, such as managing group settings, adding or removing members, and moderating conversations.",
                        "Notifications alert users to new messages in the group chat, ensuring that they stay updated on ongoing discussions.",
                        "Regular updates and improvements to the group chat functionality enhance user experience, performance, and reliability over time."
                    ]
                }
            ],
            benefits: [
                "Convenience: Users can effortlessly connect and communicate with friends, family, or colleagues, eliminating the barriers of distance and time zones.",
                "Efficiency: Streamlined messaging and real-time communication tools save time for users, enabling quick and effective exchange of information and ideas.",
                "Accessibility: The app's availability across various platforms ensures that users can stay connected on the go, whether on their desktop, mobile device, or web browser.",
                "Transparency: Transparent message delivery and read receipts provide users with clarity on the status of their messages, ensuring effective communication and follow-up.",
                "Enhanced Collaboration: Improved collaboration features foster better teamwork and coordination among users, facilitating seamless project management and decision-making.",
                "Personalization: Customizable settings and preferences allow users to tailor their chat experience according to their preferences, enhancing comfort and satisfaction.",
                "Security: Advanced security measures, including end-to-end encryption and secure authentication methods, safeguard users' privacy and protect their conversations from unauthorized access.",
                "Quality Conversations: By providing a platform for meaningful discussions and interactions, the app promotes the exchange of ideas, support, and camaraderie among users, enriching their social connections and relationships."
            ],
            future_enhancements: [
                "Integration with AI-powered chatbots to provide automated assistance and support to users.",
                "Implementation of voice and video calling features for richer and more immersive communication experiences.",
                "Introduction of augmented reality (AR) and virtual reality (VR) capabilities for interactive and engaging conversations.",
                "Enhancement of group chat functionalities with additional features such as polls, surveys, and file sharing.",
                "Development of advanced notification settings allowing users to customize their notification preferences based on message urgency and sender.",
                "Integration with third-party services and platforms to enable seamless sharing of content and data between users.",
                "Introduction of language translation tools to facilitate communication between users speaking different languages.",
                "Implementation of advanced search and filtering options to help users easily find and retrieve past messages and conversations.",
                "Enhancement of user profiles with additional information and customization options for a more personalized chat experience.",
                "Integration of social media features such as story updates, status updates, and reactions to enrich user interactions and engagement."
            ],

            conclusion: "In conclusion, the chat app provides users with a convenient, efficient, and secure platform for communication and collaboration. With its user-friendly interface, robust security measures, and customizable features, the app enhances the way users connect and interact with each other. Moving forward, the app aims to further improve user experience and engagement through the implementation of advanced features and enhancements. By staying committed to innovation and user satisfaction, the chat app will continue to evolve and meet the evolving needs of its users in the ever-changing digital landscape."
        },
        {
            id: 7,
            title: "Profile Update App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: "users can effortlessly update their profile information, including contact details, work experience, education, skills, and more.Easily upload or change profile photos to ensure a fresh and up-to-date appearance.Access a user-friendly interface that makes the profile update process simple and intuitive, even for novice users.",
            features: [{
                "heading": "User Registration",
                "details": [
                    "Users can register for an account by providing their email, username, password, and profile picture.",
                    "Email verification ensures the validity of user accounts and reduces the risk of fake or spam accounts.",
                    "Profile pictures add a personal touch to user profiles and help other users recognize them in the app.",
                    "Username and password combination provides secure access to user accounts and protects user data.",
                    "Registration process is user-friendly and intuitive, allowing users to create an account quickly and easily."
                ]
            },
            {
                "heading": "Login",
                "details": [
                    "User navigates to the login section of the app and enters their username.",
                    "Upon entering the username, the user clicks the 'Let's Go' button to proceed with the login process.",
                    "The app retrieves the user's profile image associated with the entered username and displays it for verification purposes.",
                    "User verifies the displayed profile image to ensure they are logging into the correct account.",
                    "Once verified, the user enters their password in the provided field.",
                    "After entering the password, the user submits the login form for authentication.",
                    "The app validates the entered credentials (username and password) and grants access to the user's account if they are correct.",
                    "Upon successful authentication, the user gains access to their account and can begin using the app's features."
                ]
            },
            {
                "heading": "Profile Update Section",
                "details": [
                    "Users can access the profile update section after successfully logging into their account.",
                    "In the profile update section, users can add or modify their first name, last name, and mobile number.",
                    "The option to change the profile picture allows users to personalize their profile and update their appearance.",
                    "The profile update section provides a seamless and user-friendly interface for making changes to account information.",
                    "Users can review and confirm their updates before saving changes to ensure accuracy and completeness.",
                    "Profile updates are instantly reflected in the user's account and visible to other users as per their privacy settings."
                ]
            },
            {
                "heading": "Password Recovery",
                "details": [
                    "User initiates the password recovery process by clicking on the 'Recover Now' option.",
                    "The app prompts the user to enter their email address associated with their account.",
                    "After entering the email address, the user submits the request for password recovery.",
                    "An OTP (One-Time Password) is generated and sent to the user's registered email address for verification.",
                    "The user checks their email inbox for the OTP and retrieves it.",
                    "Upon receiving the OTP, the user enters it into the designated field in the app for verification.",
                    "The app validates the entered OTP and grants the user access to the password reset section.",
                    "If the user does not receive the OTP, they can request to resend it by clicking on the 'Resend OTP' option.",
                    "Once verified, the user can proceed to reset their password securely."
                ]
            }, {
                "heading": "Logout",
                "details": [
                    "User initiates the logout process by navigating to the logout option in the app menu or profile settings.",
                    "Upon selecting the logout option, the app confirms the user's intention to log out.",
                    "The user confirms the logout action by clicking on the 'Logout' button or similar confirmation prompt.",
                    "The app securely terminates the user's session and invalidates their authentication token.",
                    "Once logged out, the user is redirected to the login page or another landing page, depending on the app's design.",
                    "Any cached data or session-related information associated with the user's account is cleared from the app's memory.",
                    "The user is now successfully logged out and can no longer access their account until they log in again with valid credentials."
                ]
            }
            ],
            tools: [{ ui: "Front-End", tools: ["React Js", "Redux", "Bootstrap"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE", "SOCKET"] }, { ui: "THird-party Integrations", tools: ["SENDINBLUE"] }],
            workflow: [
                {
                    "title": "User Authentication Workflow",
                    "details": [
                        "User initiates the registration or login process by accessing the respective option in the app interface.",
                        "The app prompts the user to provide necessary information such as email, username, and password for registration, or username and password for login.",
                        "Upon submission, the app verifies the provided credentials against existing records in the database.",
                        "If the credentials are valid and registration is successful, the user is redirected to the dashboard or main page.",
                        "If the credentials are valid and login is successful, the user is granted access to the dashboard or main page.",
                        "In case of invalid credentials or registration failure, appropriate error messages are displayed, and the user is prompted to try again.",
                        "Upon successful authentication, the app generates a JSON Web Token (JWT) and assigns it to the user's session for subsequent requests.",
                        "The user can access various features and functionalities of the app securely using the JWT token until they log out or the session expires.",
                        "When the user logs out, the app securely terminates the session and invalidates the JWT token, preventing unauthorized access to the user's account."
                    ]
                }, {
                    "title": "Login Workflow",
                    "details": [
                        "User initiates the login process by entering their username and password in the designated fields.",
                        "The app verifies the provided credentials against the database records.",
                        "If the credentials are valid, the user is granted access to their account and redirected to the dashboard.",
                        "If the credentials are invalid, the app displays an error message indicating the login failure.",
                        "Upon successful login, the app generates a JSON Web Token (JWT) and assigns it to the user's session for subsequent requests."
                    ]
                }, {
                    "title": "Update Profile Workflow",
                    "details": [
                        "User navigates to the profile settings or edit profile section of the app.",
                        "User updates their profile information such as first name, last name, mobile number, and profile picture.",
                        "After making the desired changes, the user saves the updated profile information.",
                        "The app validates the updated information and updates the user's profile in the database.",
                        "User receives a confirmation message indicating that the profile update was successful."
                    ]
                }, {
                    "title": "Recover Password Workflow",
                    "details": [
                        "User initiates the password recovery process by clicking on the 'Forgot Password' or similar option.",
                        "The app prompts the user to enter their registered email address for password recovery.",
                        "Upon submission, the app sends a password reset link with a unique token to the user's email address.",
                        "User receives the password reset email and clicks on the provided link to reset their password.",
                        "If the provided token is valid, the app allows the user to set a new password for their account.",
                        "User enters and confirms the new password, and the app updates the password in the database.",
                        "User receives a confirmation message indicating that the password reset was successful."
                    ]
                }, {
                    "title": "Logout Workflow",
                    "details": [
                        "User initiates the logout process by navigating to the logout option in the app menu or profile settings.",
                        "Upon selecting the logout option, the app confirms the user's intention to log out.",
                        "User confirms the logout action by clicking on the 'Logout' button or similar confirmation prompt.",
                        "The app securely terminates the user's session and invalidates their authentication token.",
                        "Once logged out, the user is redirected to the login page or another landing page, depending on the app's design.",
                        "Any cached data or session-related information associated with the user's account is cleared from the app's memory.",
                        "User is now successfully logged out and can no longer access their account until they log in again with valid credentials."
                    ]
                }
            ],
            "benefits": [
                "Convenience: Users can easily manage their accounts and access app features from anywhere, at any time, using their mobile devices or computers.",
                "Efficiency: Streamlined processes such as login, profile updates, password recovery, and logout enhance user productivity and reduce time spent on administrative tasks.",
                "User Experience: Intuitive interfaces and user-friendly workflows contribute to a positive user experience, increasing user satisfaction and engagement.",
                "Security: Robust authentication mechanisms, password encryption, and secure session management protect user accounts and sensitive information from unauthorized access or breaches.",
                "Flexibility: Users have the flexibility to update their profile information, recover passwords, and log out of their accounts whenever needed, empowering them to maintain control over their accounts.",
                "Seamless Recovery: The password recovery feature provides a seamless and efficient way for users to regain access to their accounts in case of forgotten passwords or security concerns.",
                "Peace of Mind: By implementing best practices for user authentication, profile management, and session handling, the app ensures that users can trust the platform with their personal information and transactions.",
                "Accessibility: Accessible features such as password recovery via email and intuitive user interfaces make the app inclusive and user-friendly for individuals of all technical backgrounds."
            ],
            "future_enhancements": [
                "Multi-factor Authentication (MFA): Implement additional layers of security such as MFA to further enhance user account protection.",
                "Social Media Integration: Allow users to sign up or log in using their social media accounts for added convenience and streamlined registration.",
                "Enhanced User Profiles: Introduce features for users to customize their profiles further, such as adding additional contact information, profile themes, or bio sections.",
                "Advanced Password Management: Provide users with tools to manage and secure their passwords effectively, such as password strength meters, password expiration reminders, and password managers integration.",
                "Localized Support: Expand language and localization options to cater to a more diverse user base, making the app accessible to users worldwide.",
                "Biometric Authentication: Integrate biometric authentication methods such as fingerprint or facial recognition for seamless and secure login experiences.",
                "Activity Logging and Reporting: Implement features to log and track user activities within the app, enabling administrators to monitor usage patterns and identify potential security risks or usability issues.",
                "Integration with Identity Providers: Allow users to leverage existing identity providers (e.g., Google, Apple) for authentication and account management, enhancing user convenience and reducing registration friction."
            ],
            conclusion: "The system prioritizes user experience by providing intuitive interfaces and streamlined workflows for tasks such as login, profile updates, and password recovery.Robust security measures, including encryption, secure session management, and password recovery via email, ensure the protection of user accounts and sensitive data.Future enhancements such as multi-factor authentication, social media integration, and advanced password management promise to further improve security and user experience.Overall, the profile management system aims to empower users with control over their accounts while maintaining high standards of security and accessibility."

        },
        {
            id: 8,
            title: "Food Delivery App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: "Extensive Menu Selection: Choose from a diverse range of pizza flavors, toppings, and sizes to satisfy your cravings.Customization Options: Personalize your pizza by selecting your favorite toppings, crust types, and additional extras.Effortless Ordering Process: Navigate through our intuitive app interface to place your order quickly and effortlessly.User-Friendly Experience: Designed with simplicity in mind, our app caters to users of all ages and technical backgrounds, making pizza ordering a breeze.",
            features: [
                {
                    "heading": "Intuitive Dashboard",
                    "details": [
                        "Upon first-time, users are greeted with an intuitive dashboard showcasing a comprehensive list of available pizzas.",
                        "The dashboard provides an overview of all pizza options, including popular flavors, specialty pizzas, and customizable choices.",
                        "Users can easily browse through the list, view detailed descriptions, and select their desired pizzas for ordering."
                    ]
                },
                {
                    "heading": "User Registration",
                    "details": ["To register, users provide necessary details such as name, email, and password. Upon successful registration, users gain access to the app's features."]
                },
                {
                    "heading": "User Login",
                    "details": ["Registered users log in using their credentials (email and password) to access their accounts. Upon successful login, users can begin using the app's functionalities."]
                },
                {
                    "heading": "Pizza Selection and Customization",
                    "details": [
                        "Users can add pizzas to their cart, choosing from various size variants including small, medium, and large.",
                        "For each pizza, users can specify the quantity they wish to order, allowing them to order multiple pizzas of the same or different variants.",
                        "The app provides options for customizing pizzas with additional toppings, sauces, or crust types to suit individual preferences."
                    ]
                },
                {
                    "heading": "Adding to Cart",
                    "details": ["Users can add selected pizzas to their cart, where they can adjust the quantity and remove items as needed."]
                },
                {
                    "heading": "Checkout Process",
                    "details": ["Upon proceeding to checkout, users are presented with payment options, including Razorpay integration for secure transactions."]
                },
                {
                    "heading": "Order Confirmation",
                    "details": ["After successful payment, users receive confirmation of their order. They can then navigate to the order section to view details of their recent transactions."]
                },
                {
                    "heading": "User Profile Dropdown",
                    "details": [
                        "Users can access a dropdown menu under their name, providing quick access to account-related options.",
                        "The dropdown menu includes options to view past orders, allowing users to track their order history and status.",
                        "Additionally, users can easily log out from the app directly from the dropdown menu, ensuring convenient account management."
                    ]
                },
                {
                    "heading": "Admin Dashboard",
                    "details": [
                        "Admins have access to a dedicated dashboard where they can manage various aspects of the pizza ordering system.",
                        "Admins can add new pizza options to the menu, including specifying details such as name, toppings, and price.",
                        "The dashboard allows admins to edit existing pizza listings to update information or make modifications.",
                        "Admins have the ability to remove pizza options from the menu as needed, ensuring the menu remains up-to-date and relevant.",
                        "In addition to pizza management, admins can also view lists of all registered users and all orders placed through the system."
                    ]
                }
            ],
            tools: [{ ui: "Front-End", tools: ["React Js", "Redux", "Bootstrap"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE", "SOCKET"] }, { ui: "THird-party Integrations", tools: ["SENDINBLUE"] }],
            workflow: [
                {
                    "title": "Intuitive Dashboard",
                    "details": [
                        "Upon first-time, users are greeted with an intuitive dashboard showcasing a comprehensive list of available pizzas.",
                        "The dashboard provides an overview of all pizza options, including popular flavors, specialty pizzas, and customizable choices.",
                        "Users can easily browse through the list, view detailed descriptions, and select their desired pizzas for ordering."
                    ]
                }, {
                    "title": "User Registration",
                    "details": ["To register, users provide necessary details such as name, email, and password. Upon successful registration, users gain access to the app's features."]
                },
                {
                    "title": "User Login",
                    "details": ["Registered users log in using their credentials (email and password) to access their accounts. Upon successful login, users can begin using the app's functionalities."]
                },
                {
                    "title": "Pizza Selection and Customization",
                    "details": [
                        "Users can add pizzas to their cart, choosing from various size variants including small, medium, and large.",
                        "For each pizza, users can specify the quantity they wish to order, allowing them to order multiple pizzas of the same or different variants.",
                        "The app provides options for customizing pizzas with additional toppings, sauces, or crust types to suit individual preferences."
                    ]
                },
                {
                    "title": "Adding to Cart",
                    "details": ["Users can add selected pizzas to their cart, where they can adjust the quantity and remove items as needed."]
                },
                {
                    "title": "Checkout Process",
                    "details": ["Upon proceeding to checkout, users are presented with payment options, including Razorpay integration for secure transactions."]
                },
                {
                    "title": "Order Confirmation",
                    "details": ["After successful payment, users receive confirmation of their order. They can then navigate to the order section to view details of their recent transactions."]
                },
                {
                    "title": "User Profile Dropdown",
                    "details": [
                        "Users can access a dropdown menu under their name, providing quick access to account-related options.",
                        "The dropdown menu includes options to view past orders, allowing users to track their order history and status.",
                        "Additionally, users can easily log out from the app directly from the dropdown menu, ensuring convenient account management."
                    ]
                },
                {
                    "title": "Admin Dashboard",
                    "details": [
                        "Admins have access to a dedicated dashboard where they can manage various aspects of the pizza ordering system.",
                        "Admins can add new pizza options to the menu, including specifying details such as name, toppings, and price.",
                        "The dashboard allows admins to edit existing pizza listings to update information or make modifications.",
                        "Admins have the ability to remove pizza options from the menu as needed, ensuring the menu remains up-to-date and relevant.",
                        "In addition to pizza management, admins can also view lists of all registered users and all orders placed through the system."
                    ]
                }
            ],
            "benefits": [
                "Convenience: Users can easily browse and order pizzas from the comfort of their homes, eliminating the need to visit a physical store.",
                "Customization: The app allows users to customize their pizza orders, selecting from a variety of toppings, sizes, and crust options to suit their preferences.",
                "Efficiency: The ordering process is streamlined, with features such as quick add-to-cart options and secure checkout, saving users time and effort.",
                "Order Tracking: Users can track the status of their orders in real-time, from placement to delivery, ensuring transparency and peace of mind.",
                "Menu Management: Admins can efficiently manage the pizza menu, adding, editing, and removing options as needed to keep the menu fresh and appealing.",
                "Insights: The system provides valuable insights for admins, including user demographics, popular pizza choices, and order trends, enabling data-driven decision-making."
            ],
            "future_enhancements": [
                "Mobile App Integration: Developing a mobile app version of the pizza ordering system to provide users with greater flexibility and accessibility.",
                "Reward Programs: Implementing loyalty programs or reward systems to incentivize repeat orders and customer retention.",
                "Advanced Analytics: Enhancing analytics capabilities to provide more in-depth insights into user behavior, order patterns, and market trends.",
                "Social Media Integration: Integrating social media platforms for seamless sharing of pizza orders, promotions, and user-generated content.",
                "Recommendation Engine: Implementing a recommendation engine to suggest personalized pizza options based on user preferences and past orders.",
                "Chatbot Support: Introducing chatbot support for customer inquiries, order tracking, and assistance with menu navigation and customization."
            ],
            "conclusion": "In conclusion, the pizza ordering app offers a convenient and efficient way for users to satisfy their pizza cravings. With features for both users and admins, the app provides a seamless ordering experience while also offering valuable insights and management tools for pizza businesses. With future enhancements focused on user personalization, analytics, and expansion, the app is poised to further improve and innovate in the pizza delivery market."
        },
        {
            id: 9,
            title: "One to One Chat App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: "Welcome to our One to One Chat App, a platform designed to facilitate seamless communication between users.In today's fast-paced digital world, staying connected with friends, family, and colleagues is more important than ever.Whether you want to catch up with a friend, collaborate on a project with a colleague, or share updates with family members, our app provides a convenient and reliable way to stay connected.",
            features: [{
                heading: 'User Authentication:', details: ['Users sign up and log in securely using JSON Web Tokens (JWT) and encrypted passwords with bcrypt.']
            },
            {
                heading: 'Public Routes:', details: ['Access certain features of the app without needing to sign in.']
            }, {
                heading: 'Validation: ', details: ['Ensure that public routes are restricted appropriately to maintain security and privacy.']
            }, {
                heading: 'Limited Access:', details: ['Public routes may include features like viewing available doctors or general information about the services offered.']
            }, {
                heading: 'Authentication Requirement:', details: ['Certain actions, such as booking appointments or accessing personal profiles, require authentication and are not available through public routes.']
            }, {
                heading: 'Security Measures:', details: ['Implement secure validation methods to prevent unauthorized access to sensitive data or functionalities.']
            }, {
                heading: 'Error Handling:', details: ['Handle any attempts to access restricted features gracefully, displaying informative messages and guiding users towards the appropriate actions.']
            }, {
                heading: 'Enhanced Privacy: ', details: ['Protect user information by ensuring that personal data remains secure and inaccessible through public routes.']
            },
            {
                "heading": "Private Chat",
                "details": [
                    "Engage in private one-to-one conversations with other users.",
                    "Enjoy the privacy and intimacy of direct communication without interruptions from other users.",
                    "Exchange messages in real-time, ensuring swift and seamless conversation.",
                    "Share text, images, files, and multimedia content securely and privately.",
                    "Access chat history to review previous conversations and messages exchanged with specific users.",
                    "Receive notifications for new messages to stay updated on ongoing conversations."
                ]
            }],
            tools: [{ ui: "Front-End", tools: ["React Js", "Redux", "Bootstrap"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE", "SOCKET"] }],
            workflow: [{
                title: "User Registration and Login Process:",
                details: [
                    "New users register by providing their details, including email and password.",
                    "Upon successful registration, users are prompted to log in to access the app's features.",
                    "To log in, users enter their email and password combination.",
                    "The login process verifies the entered credentials against the database to authenticate the user.",
                    "If the credentials are valid, the user is granted access to the app's functionalities.",
                    "Invalid credentials result in an error message prompting users to re-enter their login information.",
                    "The app employs security measures such as encryption to safeguard user passwords during transmission and storage.",
                    "Additionally, measures like CAPTCHA may be implemented to prevent automated login attempts and enhance security.",
                    "Forgot password functionality may also be provided, allowing users to reset their passwords through email verification."
                ]
            },
            {
                title: "Logout and Session Management:",
                details: [
                    "When users log out, the JWT token stored on the client side is invalidated.",
                    "The backend handles session management, ensuring that unauthorized access to user accounts is prevented.",
                    "If a user attempts to access a page after their JWT token has expired, they are redirected to the login page to re-authenticate.",
                    "Upon successful logout, the user's session is terminated, and they are redirected to the login page.",
                    "If the user's session is active and the JWT token is valid, they are directed to the homepage upon logging in without the need to re-enter credentials.",
                    "This approach ensures secure access to the application and protects user accounts from unauthorized access.",
                    "Session expiration and logout mechanisms enhance the overall security of the application by preventing unauthorized access to user accounts."
                ]
            },
            {
                title: "Persistent Login State and Protected Routes:",
                details: [
                    "The app maintains the user's login state persistently, typically using browser cookies or local storage.",
                    "When a user returns to the app after some time, the app checks for the presence of authentication tokens or session data.",
                    "If the user is already logged in (i.e., authentication tokens are present and valid), they are automatically redirected to the homepage or the last accessed page.",
                    "This automatic redirection ensures a seamless user experience without requiring the user to log in again.",
                    "If the user is not logged in (i.e., authentication tokens are missing or expired), they are directed to the login page to authenticate.",
                    "Protected routes within the app are accessible only when the user is authenticated.",
                    "Unauthorized access attempts to protected routes trigger redirection to the login page for authentication.",
                    "This approach ensures that sensitive sections of the app are accessible only to authenticated users, enhancing security and user privacy.",
                    "The persistent login state mechanism streamlines the user experience by maintaining session continuity across app visits."
                ]
            }, {
                "title": "Private Chat Workflow",
                "details": [
                    "User initiates a private chat session by selecting a specific user from their contacts list or search functionality.",
                    "The selected user receives a notification indicating that they have been invited to a private chat.",
                    "Upon acceptance, both users are connected to a private chat room where they can exchange messages.",
                    "Messages sent by one user are instantly delivered to the other user in real-time, ensuring swift communication.",
                    "Users can send text, images, files, and multimedia content securely within the private chat room.",
                    "The chat history is maintained, allowing users to review previous messages exchanged in the private chat session.",
                    "Users receive notifications for new messages, ensuring they stay updated on ongoing conversations even when not actively using the app."
                ]
            }],
            benefits: [
                "Convenience: Users can effortlessly connect and communicate with friends, family, or colleagues, eliminating the barriers of distance and time zones.",
                "Efficiency: Streamlined messaging and real-time communication tools save time for users, enabling quick and effective exchange of information and ideas.",
                "Accessibility: The app's availability across various platforms ensures that users can stay connected on the go, whether on their desktop, mobile device, or web browser.",
                "Transparency: Transparent message delivery and read receipts provide users with clarity on the status of their messages, ensuring effective communication and follow-up.",
                "Enhanced Collaboration: Improved collaboration features foster better teamwork and coordination among users, facilitating seamless project management and decision-making.",
                "Personalization: Customizable settings and preferences allow users to tailor their chat experience according to their preferences, enhancing comfort and satisfaction.",
                "Security: Advanced security measures, including end-to-end encryption and secure authentication methods, safeguard users' privacy and protect their conversations from unauthorized access.",
                "Quality Conversations: By providing a platform for meaningful discussions and interactions, the app promotes the exchange of ideas, support, and camaraderie among users, enriching their social connections and relationships."
            ],
            future_enhancements: [
                "Integration with AI-powered chatbots to provide automated assistance and support to users.",
                "Implementation of voice and video calling features for richer and more immersive communication experiences.",
                "Introduction of augmented reality (AR) and virtual reality (VR) capabilities for interactive and engaging conversations.",
                "Enhancement of group chat functionalities with additional features such as polls, surveys, and file sharing.",
                "Development of advanced notification settings allowing users to customize their notification preferences based on message urgency and sender.",
                "Integration with third-party services and platforms to enable seamless sharing of content and data between users.",
                "Introduction of language translation tools to facilitate communication between users speaking different languages.",
                "Implementation of advanced search and filtering options to help users easily find and retrieve past messages and conversations.",
                "Enhancement of user profiles with additional information and customization options for a more personalized chat experience.",
                "Integration of social media features such as story updates, status updates, and reactions to enrich user interactions and engagement."
            ],
            conclusion: "In conclusion, the chat app provides users with a convenient, efficient, and secure platform for communication and collaboration. With its user-friendly interface, robust security measures, and customizable features, the app enhances the way users connect and interact with each other. Moving forward, the app aims to further improve user experience and engagement through the implementation of advanced features and enhancements. By staying committed to innovation and user satisfaction, the chat app will continue to evolve and meet the evolving needs of its users in the ever-changing digital landscape."
        }, {
            id: 10,
            title: 'EXPENSE TRACKER APP',
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: 'Our expense tracker is designed to simplify this process by providing users with a comprehensive tool to monitor and analyze their expenses effortlessly. From daily purchases to monthly bills, expenses can quickly add up, making it difficult to maintain a clear understanding of where money is being spent. Our expense tracker addresses this issue by offering a user-friendly platform to record, categorize, and analyze expenses in real-time. By organizing expenses into categories, setting budgets, and generating insightful reports, users can gain a deeper understanding of their spending patterns and identify areas for improvement.',
            features: [{
                "heading": "Expense Tracking Table",
                "details": [
                    "View a comprehensive table of all expenses recorded within the system.",
                    "Display expense details such as date, amount, category, description, and user.",
                    "Sortable columns allow users to organize expense data based on different criteria.",
                    "Search functionality enables users to quickly find specific expenses based on keywords or filters.",
                    "Edit and delete options for modifying or removing expense entries as needed."
                ]
            }, {
                "heading": "Expense Analytics Dashboard",
                "details": [
                    "Access an interactive dashboard providing insights and analysis of expense data.",
                    "Visualize expense trends, spending patterns, and category breakdowns through charts and graphs.",
                    "Compare expenses over different time periods to identify trends and anomalies.",
                    "Generate custom reports and summaries for in-depth analysis and decision-making.",
                    "Drill-down functionality allows users to explore specific areas of expense data in more detail."
                ]
            }
                , { heading: 'User Authentication with JWT:', details: ['Users can securely register and log in to the expense tracker system.', 'Authentication is implemented using JSON Web Tokens (JWT), ensuring data security and user privacy.', 'Each user receives a unique token upon successful authentication, which is used to authenticate subsequent requests to the server.'] }
                , { heading: "Password Encryption with Bcrypt:", details: ['User passwords are encrypted using the Bcrypt library before storing them in the database.', 'Bcrypt provides a strong and reliable encryption mechanism, protecting user passwords from unauthorized access or breaches.'] },
            { heading: 'Reset Password Link with SendGrid:', details: ['Users can reset their passwords conveniently through the use of reset password links.', 'SendGrid integration enables the delivery of email notifications containing password reset links to users registered email addresses.', 'This feature enhances user experience by providing a straightforward method for password recovery.'] },
                , {
                "heading": "Add New Expense",
                "details": [
                    "Easily add new expenses to the system.",
                    "Enter expense details including category, description, amount, and expense type (income or expense).",
                    "Submit expense information for recording and tracking within the expense tracking table."
                ]
            }, {
                "heading": "Time Filter",
                "details": [
                    "Utilize time filters to view expense data for specific time periods.",
                    "Options include 1 week, 1 month, 1 year, as well as the ability to specify a custom time range.",
                    "Apply filters to refine expense data and focus on relevant information for analysis and decision-making."
                ]
            }, {
                "heading": "Income and Expense Filters",
                "details": [
                    "Filter expense data by income or expense type to distinguish between money earned and money spent.",
                    "Easily toggle between income and expense views to track both inflows and outflows of funds.",
                    "Use income and expense filters in conjunction with other filters to analyze specific aspects of financial transactions."
                ]
            },
            {
                heading: 'Pagination for Expenses Page:', details: ['Expenses page is optimized for improved performance and user experience through pagination.', 'Pagination divides the list of expenses into separate pages, reducing load times and enhancing readability.', 'Users can navigate through expense records more efficiently, especially when dealing with large datasets.']
            },
            {
                heading: `Logout and Session Management:`, details: ['Users can log out of their accounts to securely end their session.', 'JWT tokens are invalidated upon logout, ensuring that unauthorized access to the account is prevented.', 'Session management mechanisms handle user sessions effectively, providing a seamless and secure experience.']
            }],
            tools: [{ ui: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE"] }, { ui: "Third-party Integrations", tools: ["Razorpay", "Sendgrid"] }, { ui: "Cloud", tools: ["AWS", "EC2 instances", "RDS", "S3 BUCKET", "IAM USER"] }],
            workflow: [{ title: "User Registration and Authentication:", details: ['Users start by accessing the registration page where they provide their details, such as email and password.', 'Upon submission, the backend validates the data and creates a new user account in the database using Sequelize.', 'The users password is encrypted using Bcrypt before storing it in the database to ensure security.', 'Once registered, users can log in using their credentials.', 'During login, the backend verifies the users credentials, generates a JWT token, and sends it back to the client for authentication on subsequent requests.'] }
                , {
                "title": "Expense Tracking and Management",
                "details": [
                    "Users access the expense tracking table to view a comprehensive list of all expenses recorded within the system.",
                    "Expense details such as date, amount, category, description, and expense type (income or expense) are displayed in the table.",
                    "Sortable columns allow users to organize expense data based on different criteria such as date or amount.",
                    "Users can easily add new expenses to the system by providing details including category, description, amount, and expense type.",
                    "Added expenses are submitted for recording and tracking within the expense tracking table.",
                    "Expense data can be filtered by income or expense type to distinguish between money earned and money spent.",
                    "Time filters enable users to view expense data for specific time periods such as 1 week, 1 month, 1 year, or custom time ranges.",
                    "Users can edit or delete expense entries as needed to modify or remove recorded expenses."
                ]
            }, {
                "title": "Expense Analytics and Reporting",
                "details": [
                    "Users access an interactive expense analytics dashboard to gain insights and analysis of expense data.",
                    "The dashboard visualizes expense trends, spending patterns, and category breakdowns through charts and graphs.",
                    "Comparison of expenses over different time periods allows users to identify trends and anomalies.",
                    "Custom reports and summaries can be generated for in-depth analysis and decision-making.",
                    "Drill-down functionality enables users to explore specific areas of expense data in more detail.",
                    "Expense data can be filtered by income or expense type to track both inflows and outflows of funds.",
                    "Additional filters such as time filters allow users to refine expense data based on specific criteria for analysis."
                ]
            }, {
                title: "Reset Password Functionality:", details: ['If users forget their passwords, they can request a password reset by providing their email address.', 'The backend processes the request and generates a unique token for the password reset link.', 'The link containing the token is sent to the users email address using SendGrid integration.', 'Upon clicking the link, users are directed to a page where they can securely reset their password.']
            }, {
                title: "Logout and Session Management:", details: ['When users log out, the JWT token stored on the client side is invalidated.', 'The backend handles session management, ensuring that unauthorized access to user accounts is prevented.']
            }
            ],
            benefits: ['Better financial management and awareness of spending habits', 'Ability to track expenses in real-time', 'Customizable reporting for insights into spending patterns', 'Improved budgeting and financial planning'],
            future_enhancements: ['Multi-user support with shared expenses', 'Integration with financial institutions for automatic expense tracking'],
            conclusion: 'Our application prioritizes scalability and performance, ensuring reliability even as user demand grows. Whether you are an individual budgeter or a premium subscriber seeking enhanced financial insights, our Expense Tracker is your go-to solution for achieving financial goals.'

        }, {
            id: 11,
            title: "Blood Bank App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            "introduction": "Welcome to the Blood Bank App, a revolutionary platform dedicated to facilitating blood donation and saving lives. With the power of technology, our app aims to connect blood donors with recipients in need, ensuring timely access to life-saving blood transfusions. Whether you're a donor willing to contribute to the community or a recipient seeking urgent assistance, our app provides a seamless and efficient way to match donors with recipients. Through a user-friendly interface and advanced features, we strive to streamline the blood donation process, making it accessible to all. Join us in our mission to make a difference and save lives one donation at a time.",
            features: [{
                "heading": "Donor Registration:",
                "details": [
                    "Donors can register through a dedicated registration page tailored to their specific needs.",
                    "The registration process collects essential donor information such as personal details, blood type, medical history, and donation preferences.",
                    "Donors are encouraged to provide accurate and up-to-date information to facilitate the matching process with recipients in need."
                ]
            },
            {
                "heading": "Admin Registration:",
                "details": [
                    "Administrators have a separate registration page designed for administrative access and privileges.",
                    "Admin registration involves submitting credentials and undergoing verification to gain access to administrative functionalities.",
                    "Upon successful registration, admins can manage user accounts, oversee blood donation activities, and perform other administrative tasks."
                ]
            },
            {
                "heading": "Organisation Registration:",
                "details": [
                    "Organizations interested in partnering with the blood bank can register through a dedicated page designed for organizational registration.",
                    "The registration process collects information about the organization, including contact details, collaboration interests, and organizational requirements.",
                    "Registered organizations may gain access to specialized features and services tailored to their partnership needs."
                ]
            },
            {
                "heading": "Hospital Registration:",
                "details": [
                    "Hospitals seeking blood donations and transfusion services can register through a specialized registration page designed for hospital registration.",
                    "The registration process involves providing information about the hospital, blood bank requirements, and contact details.",
                    "Registered hospitals may gain access to blood donation services, blood inventory management tools, and other hospital-specific features."
                ]
            },
            {
                "heading": "Organisation Login and Blood Inventory Management:",
                "details": [
                    "Organizations can log in through a dedicated login form using their registered credentials.",
                    "Upon successful login, organizations gain access to blood inventory management functionalities.",
                    "Organizations can manage their blood inventory by marking available blood units as 'IN' for donation or 'OUT' for hospital use.",
                    "Each blood group (e.g., O+, A-, AB+) is managed separately to ensure accurate inventory tracking and management.",
                    "Registered donors can mark their available blood units as 'IN', indicating their willingness to contribute to the blood bank.",
                    "Hospitals can request blood units by marking them as 'OUT', indicating their need for specific blood groups for transfusion purposes."
                ]
            },
            {
                "heading": "Login Details for Donors & Hospitals:",
                "details": [
                    "Donors can access details of organizations they are associated with through the app.",
                    "The app provides a dedicated section for donors to view information about the organizations they are included in.",
                    "Organizational details may include contact information, collaboration interests, and any specific requirements or preferences.",
                    "Access to organization details helps donors stay informed about the organizations they are associated with and their activities.",
                    "Donors can use this information to coordinate blood donation efforts, volunteer opportunities, and other collaborative initiatives with the organizations."
                ]
            },
            {
                "heading": "Admin Access and Management:",
                "details": [
                    "Admins have privileged access to the app, allowing them to oversee and manage all aspects of the blood bank system.",
                    "Upon login, admins can view and access detailed information about donors, organizations, and hospitals registered with the blood bank.",
                    "Admins have the authority to manage donor profiles, organization details, and hospital information as needed.",
                    "Admin functionalities include adding, removing, or editing donor, organization, and hospital records, ensuring accurate and up-to-date information.",
                    "Admins can monitor blood inventory levels, track donation activities, and manage blood transfusion requests to ensure efficient blood bank operations.",
                    "Access to comprehensive user and organizational data empowers admins to make informed decisions, resolve issues, and facilitate collaboration among stakeholders.",
                    "Admins play a crucial role in maintaining the integrity, security, and effectiveness of the blood bank system, ensuring seamless operations and quality service delivery."
                ]
            }, {
                "heading": "Donor Blood Inventory for Organisation & available Blood:",
                "details": [
                    "Organizations can access the blood inventory of all donors associated with them through the app.",
                    "The app provides a comprehensive view of the quantity of blood available from each donor within the organization.",
                    "Organizations can track the total quantity of blood available for each blood group (e.g., O+, A-, AB+) from all donors.",
                    "Access to donor blood inventory helps organizations plan and manage blood donation drives, campaigns, and transfusion requirements more effectively.",
                    "Organizations can use this information to assess blood availability, prioritize donation efforts, and ensure adequate blood supply for medical emergencies and patient needs."
                ]
            },
            {
                "heading": "Analytics Dashboard:",
                "details": [
                    "The app provides an analytics dashboard for users to track blood inventory levels in real-time.",
                    "The dashboard displays visual representations of the quantity of blood 'IN' (available for donation) and 'OUT' (allocated for hospital use) for each blood group.",
                    "Users can view graphs, charts, and statistics illustrating the distribution of blood units across different blood groups and their current status (IN or OUT).",
                    "Analytics tools enable users to analyze trends, patterns, and fluctuations in blood inventory levels over time.",
                    "Access to analytics data empowers users to make data-driven decisions, anticipate supply-demand dynamics, and optimize blood management strategies.",
                    "Users can set custom filters, generate reports, and export data for further analysis and reporting purposes.",
                    "The analytics dashboard serves as a valuable tool for blood bank administrators, organizations, hospitals, and donors to monitor blood supply, allocation, and utilization efficiently."
                ]
            },
            {
                "heading": "Recent Blood Transactions:",
                "details": [
                    "The app provides a summary of the last three blood transactions for quick reference and tracking.",
                    "Users can view details of the most recent blood donations and transfusions, including the donor's information, recipient's information, blood type, quantity, and transaction timestamp.",
                    "Transaction details are displayed in a concise and organized format, allowing users to quickly assess recent activity and trends in blood supply and demand.",
                    "Access to recent blood transaction information helps users stay informed about recent donation and transfusion activities, enabling better coordination and decision-making.",
                    "Users can use this information to track the flow of blood units, identify patterns or anomalies in transaction activity, and make informed decisions regarding blood management and allocation.",
                    "The summary of recent blood transactions serves as a valuable tool for blood bank administrators, organizations, hospitals, and donors to monitor recent activity and trends in blood supply and utilization."
                ]
            }, {
                "heading": "Logout Functionality:",
                "details": [
                    "The app includes a logout functionality that allows users to securely log out of their accounts.",
                    "Upon logging out, the user's session is terminated, and they are redirected to the login page.",
                    "Logging out ensures the security of the user's account and prevents unauthorized access to their personal information.",
                    "Users can access the logout functionality from any page within the app, typically through a designated 'Logout' button or option in the user menu.",
                    "The logout feature adheres to best practices in security and privacy, providing users with peace of mind when accessing the app."
                ]
            }
            ],
            tools: [{ ui: "front-end", tools: ["React js", "Redux", "Bootstrap", "ant-design"] }, { ui: "back-end", tools: ["Node js", "Express js", "SQL", "Sequelize"] }],
            workflow: [
                {
                    "title": "Donor Registration Workflow",
                    "details": [
                        "Donor navigates to the donor registration page and fills out the registration form.",
                        "Upon submission, the donor's information is securely stored in the database.",
                        "Donor receives confirmation of successful registration and can now log in to the app using their registered credentials."
                    ]
                },
                {
                    "title": "Admin Registration Workflow",
                    "details": [
                        "Admin navigates to the admin registration page and fills out the registration form.",
                        "Upon submission and verification, admin credentials are stored securely in the database.",
                        "Admin receives confirmation of successful registration and can now log in to the app using their registered credentials."
                    ]
                },
                {
                    "title": "Organisation Registration Workflow",
                    "details": [
                        "Organisation representative navigates to the organisation registration page and fills out the registration form.",
                        "Upon submission, organisation details are stored securely in the database.",
                        "Organisation receives confirmation of successful registration and can now log in to the app using their registered credentials."
                    ]
                },
                {
                    "title": "Hospital Registration Workflow",
                    "details": [
                        "Hospital representative navigates to the hospital registration page and fills out the registration form.",
                        "Upon submission, hospital details are stored securely in the database.",
                        "Hospital receives confirmation of successful registration and can now log in to the app using their registered credentials."
                    ]
                },
                {
                    title: "Logout and Session Management:",
                    details: [
                        "When users log out, the JWT token stored on the client side is invalidated.",
                        "The backend handles session management, ensuring that unauthorized access to user accounts is prevented.",
                        "If a user attempts to access a page after their JWT token has expired, they are redirected to the login page to re-authenticate.",
                        "Upon successful logout, the user's session is terminated, and they are redirected to the login page.",
                        "If the user's session is active and the JWT token is valid, they are directed to the homepage upon logging in without the need to re-enter credentials.",
                        "This approach ensures secure access to the application and protects user accounts from unauthorized access.",
                        "Session expiration and logout mechanisms enhance the overall security of the application by preventing unauthorized access to user accounts."
                    ]
                },
                {
                    title: "Persistent Login State and Protected Routes:",
                    details: [
                        "The app maintains the user's login state persistently, typically using browser cookies or local storage.",
                        "When a user returns to the app after some time, the app checks for the presence of authentication tokens or session data.",
                        "If the user is already logged in (i.e., authentication tokens are present and valid), they are automatically redirected to the homepage or the last accessed page.",
                        "This automatic redirection ensures a seamless user experience without requiring the user to log in again.",
                        "If the user is not logged in (i.e., authentication tokens are missing or expired), they are directed to the login page to authenticate.",
                        "Protected routes within the app are accessible only when the user is authenticated.",
                        "Unauthorized access attempts to protected routes trigger redirection to the login page for authentication.",
                        "This approach ensures that sensitive sections of the app are accessible only to authenticated users, enhancing security and user privacy.",
                        "The persistent login state mechanism streamlines the user experience by maintaining session continuity across app visits."
                    ]
                },
                {
                    "title": "Donor Login",
                    "details": [
                        "Upon logging in, donors can only access information related to the organisations they are associated with.",
                        "Donors have access to details of the donors and organisations associated with their organisation.",
                        "Donors can view their own donor profile and the details of their organisation."
                    ]
                },
                {
                    "title": "Admin Access",
                    "details": [
                        "Admins have full access to all records and functionalities within the blood bank system.",
                        "Admins can view and manage records of all donors, organisations, and hospitals.",
                        "Admins can perform tasks such as adding, removing, or editing records, and have full control over the system."
                    ]
                },
                {
                    "title": "Organisation Login",
                    "details": [
                        "Upon logging in, organisations can access details of donors and organisations associated with them.",
                        "Organisations can view details of donors and organisations belonging to their organisation.",
                        "Organisations have limited access to information based on their affiliation."
                    ]
                },
                {
                    "title": "Home Page Inventory Details",
                    "details": [
                        "The home page provides comprehensive details of the blood inventory.",
                        "Users can view blood inventory details, including blood group quantities and availability status.",
                        "The inventory details are presented in an easy-to-understand format for quick reference."
                    ]
                },
                {
                    "title": "Analytics Blood Group Analysis",
                    "details": [
                        "The analytics section offers insights into blood group distribution and availability.",
                        "Users can analyze blood group data in an analytics-driven manner, allowing for informed decision-making.",
                        "Graphs, charts, and statistics provide a visual representation of blood group trends and availability."
                    ]
                },
                {
                    "title": "Last 3 Blood Transactions",
                    "details": [
                        "Users can view details of the last three blood transactions for quick reference.",
                        "The transaction details include donor and recipient information, blood type, quantity, and timestamp.",
                        "Access to recent transaction data helps users stay updated on recent blood donation and transfusion activities."
                    ]
                },
                {
                    "title": "Hospital Organisation Affiliation",
                    "details": [
                        "Hospitals can view details of the organisations they are affiliated with.",
                        "Users can check how many organisations a hospital is affiliated with, providing insights into collaboration and partnerships."
                    ]
                }
            ],
            benefits: ['Efficiently track and manage blood inventory with comprehensive management of blood groups.', "Access real-time analytics on blood group distribution and availability for informed decision-making and resource allocation.", "Ensure timely availability of blood for donation and transfusion by efficiently managing blood groups.", "Monitor inventory levels, expiration dates, and usage patterns with streamlined tracking of blood groups.", "Easily view blood group details, including quantities, types, and availability status, for improved visibility and accessibility.", "Reduce wastage and optimize resource utilization with efficient blood group management processes."],
            "future_enhancements": [
                "Integration of AI-based predictive analytics for forecasting blood demand and optimizing inventory management.",
                "Implementation of blockchain technology to enhance transparency and security in blood donation and transfusion processes.",
                "Expansion of the app's features to include virtual blood donation drives and community engagement initiatives.",
                "Development of a mobile blood donation feature to allow users to locate nearby blood donation centers and schedule appointments.",
                "Integration of telemedicine capabilities to enable remote consultations and medical support for blood donors and recipients.",
                "Enhancement of user engagement through gamification elements such as blood donation challenges and rewards.",
                "Integration with wearable health devices to provide real-time health monitoring and feedback to blood donors.",
                "Collaboration with public health authorities and NGOs to promote awareness campaigns and initiatives for blood donation."
            ],
            conclusion: "In conclusion, the blood bank app offers a comprehensive solution for efficient blood management and healthcare accessibility.By leveraging technology and innovation, the app aims to bridge the gap between blood donors, recipients, and healthcare institutions, ensuring timely access to life-saving blood products.The blood bank app stands as a testament to the power of technology in improving healthcare delivery and saving lives."
        },
        {
            id: 12,
            title: "Doctor Appointment App",
            demo: <Link to={`/portfolio/demo/${id}`} className="btn btn-primary" target="_blank">Live Demo</Link>,
            schema: <Link to={`/portfolio/schema/${id}`} className="btn btn-primary" target="_blank">Schema</Link>,
            image: <Link to={`/portfolio/images/${id}`} className="btn btn-primary" target="_blank">Demo Images</Link>,
            introduction: "Patients can effortlessly find, book, and manage appointments with their preferred doctors. With intuitive search filters and real-time availability, scheduling appointments is quick and convenient. For doctors, the app seamlessly integrates with their schedules, reducing no-shows and optimizing patient care. Features like appointment reminders and telemedicine consultations enhance the overall healthcare experience. Join us in transforming healthcare appointment management with our user-friendly Doctor Appointment App.",
            features: [
                {
                    heading: 'User Authentication:', details: ['Users sign up and log in securely using JSON Web Tokens (JWT) and encrypted passwords with bcrypt.']
                },
                {
                    heading: 'Public Routes:', details: ['Access certain features of the app without needing to sign in.']
                }, {
                    heading: 'Validation: ', details: ['Ensure that public routes are restricted appropriately to maintain security and privacy.']
                }, {
                    heading: 'Limited Access:', details: ['Public routes may include features like viewing available doctors or general information about the services offered.']
                }, {
                    heading: 'Authentication Requirement:', details: ['Certain actions, such as booking appointments or accessing personal profiles, require authentication and are not available through public routes.']
                }, {
                    heading: 'Security Measures:', details: ['Implement secure validation methods to prevent unauthorized access to sensitive data or functionalities.']
                }, {
                    heading: 'Error Handling:', details: ['Handle any attempts to access restricted features gracefully, displaying informative messages and guiding users towards the appropriate actions.']
                }, {
                    heading: 'Enhanced Privacy: ', details: ['Protect user information by ensuring that personal data remains secure and inaccessible through public routes.']
                },
                {
                    "heading": "Separate Sidebar Lists for Users, Doctors, and Admins:",
                    "details": [
                        "User Sidebar List: Displays options relevant to regular users, such as booking appointments, viewing their profile, and accessing general information about healthcare services.",
                        "Doctor Sidebar List: Includes options tailored to doctors' needs, such as managing their schedules, approving appointment requests, and accessing patient records.",
                        "Admin Sidebar List: Features functionalities specific to administrators, such as managing user accounts, approving doctor applications, and overseeing the overall system."
                    ]
                }, {
                    "heading": "Role-Based Access Control:",
                    "details": [
                        "Ensures that each sidebar list is accessible only to users, doctors, or admins based on their respective roles.",
                        "Implements secure authentication mechanisms to verify user roles before granting access to the corresponding sidebar list."
                    ]
                }, {
                    "heading": "Customizable Layouts:",
                    "details": [
                        "Allows users, doctors, and admins to customize their sidebar lists based on their preferences or frequently used features.",
                        "Offers flexibility in arranging sidebar options for a personalized user experience."
                    ]
                }, {
                    "heading": "Consistent Design Language:",
                    "details": [
                        "Maintains a consistent design language across all sidebar lists for seamless navigation and ease of use.",
                        "Ensures uniformity in styling, layout, and interaction patterns to enhance user familiarity and usability."
                    ]
                },
                {
                    heading: 'Profile Management', details: ['All users (admin, doctor, normal user) can update their profiles with relevant information.']
                }, {
                    heading: "Appointment Booking: ", details: ['Normal users can check slot availability and request appointments. If slots are available, they choose a date and wait for doctor approval.']
                }, {
                    heading: "Doctor Application:", details: ['Normal users can apply to become doctors and await admin approval.']
                }, {
                    heading: 'Admin Approval:', details: ['Admins can approve or reject doctor applications and appointment requests. They can also view all users and doctors.']
                }, {
                    heading: 'Doctor Approval: ', details: ['Once admin-approved, doctors can manage their schedules and approve appointment requests from normal users.']
                }, {
                    heading: 'Notification System:', details: ['Normal users receive notifications upon approval of their appointment requests.']
                }, {
                    heading: 'Homepage Display: ', details: ['The homepage showcases available doctors. Once admin-approved, users can book appointments with them.']
                }, {
                    "heading": "Logout:",
                    "details": [
                        "Securely log out from your account to ensure the privacy of your information.",
                        "Logout functionality ensures that your session is terminated, preventing unauthorized access to your account.",
                        "Upon logout, users are redirected to the login page to reauthenticate for accessing app features."
                    ]
                }
            ],
            tools: [{ ui: "front-end", tools: ["React js", "Redux", "Bootstrap", "ant-design"] }, { ui: "back-end", tools: ["Node js", "Express js", "SQL", "Sequelize"] }],
            workflow: [
                {
                    title: "User Registration and Login Process:",
                    details: [
                        "New users register by providing their details, including email and password.",
                        "Upon successful registration, users are prompted to log in to access the app's features.",
                        "To log in, users enter their email and password combination.",
                        "The login process verifies the entered credentials against the database to authenticate the user.",
                        "If the credentials are valid, the user is granted access to the app's functionalities.",
                        "Invalid credentials result in an error message prompting users to re-enter their login information.",
                        "The app employs security measures such as encryption to safeguard user passwords during transmission and storage.",
                        "Additionally, measures like CAPTCHA may be implemented to prevent automated login attempts and enhance security.",
                        "Forgot password functionality may also be provided, allowing users to reset their passwords through email verification."
                    ]
                },
                {
                    title: "Logout and Session Management:",
                    details: [
                        "When users log out, the JWT token stored on the client side is invalidated.",
                        "The backend handles session management, ensuring that unauthorized access to user accounts is prevented.",
                        "If a user attempts to access a page after their JWT token has expired, they are redirected to the login page to re-authenticate.",
                        "Upon successful logout, the user's session is terminated, and they are redirected to the login page.",
                        "If the user's session is active and the JWT token is valid, they are directed to the homepage upon logging in without the need to re-enter credentials.",
                        "This approach ensures secure access to the application and protects user accounts from unauthorized access.",
                        "Session expiration and logout mechanisms enhance the overall security of the application by preventing unauthorized access to user accounts."
                    ]
                },
                {
                    title: "Persistent Login State and Protected Routes:",
                    details: [
                        "The app maintains the user's login state persistently, typically using browser cookies or local storage.",
                        "When a user returns to the app after some time, the app checks for the presence of authentication tokens or session data.",
                        "If the user is already logged in (i.e., authentication tokens are present and valid), they are automatically redirected to the homepage or the last accessed page.",
                        "This automatic redirection ensures a seamless user experience without requiring the user to log in again.",
                        "If the user is not logged in (i.e., authentication tokens are missing or expired), they are directed to the login page to authenticate.",
                        "Protected routes within the app are accessible only when the user is authenticated.",
                        "Unauthorized access attempts to protected routes trigger redirection to the login page for authentication.",
                        "This approach ensures that sensitive sections of the app are accessible only to authenticated users, enhancing security and user privacy.",
                        "The persistent login state mechanism streamlines the user experience by maintaining session continuity across app visits."
                    ]
                }, {
                    title: "User Section and Doctor Details on Homepage:",
                    details: [
                        "The homepage includes a user section for accessing app functionalities.",
                        "Users can view detailed doctor information within this section.",
                        "Doctor profiles feature essential details like name, photo, and contact information.",
                        "Users can search for doctors by specialties, location, and ratings.",
                        "Patient reviews may be available to assist in decision-making.",
                        "Interactive features like appointment scheduling buttons enhance user engagement.",
                        "Filters enable users to refine search results based on preferences.",
                        "The doctor details section facilitates informed decision-making for users.",
                        "Regular updates ensure accuracy and user satisfaction."
                    ]
                },
                {
                    title: "Doctor Availability and Slot Booking:",
                    details: [
                        "Users can click on a doctor's card to access their profile and check availability.",
                        "Within the doctor's profile, users can view available time slots for appointments.",
                        "Users select a desired date and time to check slot availability.",
                        "The app checks the selected slot's availability in real-time.",
                        "If the slot is available, users can proceed to book the appointment.",
                        "Booking confirmation is provided upon successful reservation.",
                        "If the slot is not available, users are prompted to choose another time or date.",
                        "Interactive calendar features may assist users in selecting preferred dates and times.",
                        "The booking process ensures seamless scheduling for users and efficient appointment management for doctors."
                    ]
                },
                {
                    title: "Appointment Status and Doctor Approval:",
                    details: [
                        "In the appointment section, the status of booked appointments for users is initially set to 'pending'.",
                        "Users can view the details of their appointments, including the doctor's information and appointment time.",
                        "Once a user books an appointment, it is sent to the doctor for approval.",
                        "The doctor reviews the appointment request and either approves or rejects it.",
                        "If approved by the doctor, the appointment status is updated to 'confirmed'.",
                        "Upon confirmation, users receive notification and can proceed to the appointment.",
                        "If the doctor rejects the appointment, users are notified, and they may need to reschedule.",
                        "Users can check the status of their appointments in the appointment section of the app.",
                        "This process ensures that appointments are confirmed by doctors before users can attend, enhancing scheduling efficiency and minimizing appointment conflicts."
                    ]
                },

                {
                    title: "Doctor Application and Approval Process:",
                    details: [
                        "Doctors access the 'Apply Doctor' section in the sidebar to apply for registration.",
                        "In this section, doctors fill out necessary details and submit their application.",
                        "Upon submission, the application status is set to 'waiting for admin approval'.",
                        "The admin reviews the doctor's application and credentials.",
                        "If the admin approves the application, the doctor's status is updated to 'approved'.",
                        "Approved doctors gain access to additional features and functionalities within the app.",
                        "They can then manage their schedules, view appointments, and interact with patients.",
                        "If the admin rejects the application, the doctor is notified and may need to reapply with corrected or additional information.",
                        "The doctor application and approval process ensure that only qualified healthcare professionals are granted access to the app's features, maintaining quality standards and user trust."
                    ]
                },
                {
                    title: "Admin Control and User Management:",
                    details: [
                        "The admin panel provides comprehensive access to various functionalities, including user and doctor management.",
                        "Admins can view detailed profiles of all doctors and users registered within the system.",
                        "This includes access to personal information, contact details, and any relevant credentials.",
                        "Admins have the authority to review and approve doctor applications, ensuring only qualified professionals are granted access.",
                        "Additionally, admins can monitor user activities and interactions within the app.",
                        "If illegal or inappropriate activity is detected, admins have the capability to take appropriate actions.",
                        "Admins can block or suspend users found engaging in illegal activities or violating community guidelines.",
                        "They can also approve or reject user-generated content, such as reviews or comments, to maintain a safe and respectful environment.",
                        "The admin panel serves as a vital tool for maintaining app integrity, enforcing policies, and safeguarding user experiences.",
                        "Regular monitoring and intervention by admins help ensure a secure and compliant platform for all users."
                    ]
                },
                {
                    title: "Doctor Patient Approval and Profile Management:",
                    details: [
                        "Doctors have the ability to approve or reject appointment requests from patients.",
                        "When a patient requests an appointment, it is sent to the doctor for review.",
                        "Doctors can review the patient's details and decide whether to approve or reject the appointment.",
                        "Approved appointments are confirmed, and patients are notified of the acceptance.",
                        "Rejected appointments are declined, and patients are informed accordingly.",
                        "Doctors can also manage their profiles, including updating details such as consultation fees, availability timings, and other relevant information.",
                        "Profile updates by doctors ensure that patients have access to accurate and up-to-date information.",
                        "Changes to consultation fees, timings, or other profile details are reflected for patients to view when scheduling appointments.",
                        "This level of control allows doctors to manage their practice efficiently and provide patients with the necessary information for informed decision-making.",
                        "It also streamlines the appointment booking process and enhances communication between doctors and patients."
                    ]
                }





            ],
            benefits: [
                "Convenience: Users can easily schedule appointments with preferred doctors from the comfort of their homes, reducing the need for physical visits to clinics.",
                "Efficiency: Streamlined appointment booking and management processes save time for both users and medical practitioners, improving overall efficiency.",
                "Accessibility: The app's availability on multiple devices ensures that users can access healthcare services anytime, anywhere.",
                "Transparency: Transparent appointment scheduling and status updates provide users with clarity and peace of mind regarding their healthcare appointments.",
                "Enhanced Communication: Improved communication channels between users, doctors, and administrators facilitate better coordination and collaboration in healthcare management.",
                "Personalization: Customizable profiles and preferences allow users to receive personalized care and recommendations tailored to their specific needs.",
                "Security: Robust authentication and data encryption measures ensure the privacy and security of users' personal and medical information.",
                "Quality Care: By connecting users with verified doctors and enabling feedback mechanisms, the app promotes the delivery of high-quality healthcare services."
            ],
            future_enhancements: [
                "Integration of telemedicine services for remote consultations with doctors.",
                "Implementation of a rating and review system to provide feedback on doctors and improve service quality.",
                "Enhanced appointment reminders through SMS or push notifications for improved communication with users.",
                "Integration with electronic health record (EHR) systems for seamless access to patient medical history.",
                "Expansion of language support to cater to a more diverse user base.",
                "Introduction of a virtual waiting room feature to reduce physical waiting times at clinics.",
                "Integration with health insurance providers for streamlined billing and payment processes.",
                "Development of a mobile application for increased accessibility on smartphones and tablets.",
                "Implementation of AI-powered chatbots for instant support and assistance with common queries.",
                "Enhancement of user experience through personalized recommendations based on user preferences and medical history."
            ],
            conclusion: "The Doctor Appointment App revolutionizes healthcare access by providing a convenient and efficient platform for users to schedule appointments with doctors.With features like easy sign-up, appointment booking, and secure authentication, the app ensures a seamless user experience.Overall, the Doctor Appointment App strives to simplify healthcare management, promote patient-doctor communication, and facilitate better healthcare outcomes for all."
        },

    ]
    let projectDetailsFilter = projectDetails.filter(item => Number(item.id) === Number(id))[0]
    console.log("proje", projectDetailsFilter)
    return (
        <>
            <div className="container portfolio__container1">


                <div className='prj-details'>
                    <Link to="/" className="btn btn-primary">Home</Link>
                    <h2 className='details-portfolio'>{projectDetailsFilter.title}</h2>
                    <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
                </div>
                {
                    projectDetailsFilter.demo && projectDetailsFilter.schema && projectDetailsFilter.image && <>
                        <div className='portfolio__container2'>
                            <div style={{ marginRight: "20px" }}>

                                {projectDetailsFilter.demo}
                            </div>
                            <div style={{ marginRight: "20px" }}>
                                {projectDetailsFilter.schema}
                            </div>
                            <div>
                                {projectDetailsFilter.image}
                            </div>
                        </div>
                    </>
                }

                {
                    projectDetailsFilter.introduction && <>

                        <div className='intoduction '>
                            <h1>Introduction:</h1>
                            <h4>{projectDetailsFilter.introduction}</h4>
                        </div>
                        <div className='features'>
                            <h1>Features:</h1>
                            <div>

                                {
                                    projectDetailsFilter.features.map((item, i) => {
                                        return (
                                            <div key={i}>

                                                <h2 style={{ color: "pink" }}>{item.heading}</h2>

                                                <ul >
                                                    {
                                                        item.details.map((items, i) => {
                                                            return (
                                                                <>
                                                                    <div className='heading-icon'>

                                                                        <FiCornerUpRight /><li>{items}</li>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='technology-tools'>
                            <h1>Technology:</h1>
                            {
                                projectDetailsFilter.tools.map((item, i) => {
                                    return (
                                        <div className='tools-tech'>

                                            <h2 style={{ color: "gold" }}>{item.ui}</h2>

                                            <div >

                                                {
                                                    item.tools.map((items, i) => {
                                                        return (
                                                            <>
                                                                <li style={{ color: 'greenyellow' }}>{items}</li>
                                                            </>
                                                        )
                                                    })
                                                }

                                                <p style={{ color: "goldenrod" }}>---------------------------------------</p>
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='workflow'>
                            <h1>WorkFlow:</h1>
                            {
                                projectDetailsFilter.workflow.map((item, i) => {
                                    return (
                                        <>
                                            <h3 style={{ color: "yellow" }}>{item.title}</h3>
                                            <ul>

                                                {
                                                    item.details.map((items, i) => {
                                                        return (
                                                            <>
                                                                <div className='heading-icon'>

                                                                    <FaRegHandPointRight /> <li>{items}</li>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className='benefits'>
                            <h1>Benefits:</h1>
                            <ul>

                                {
                                    projectDetailsFilter.benefits.map((item, i) => {
                                        return (
                                            <>
                                                <div className='heading-icon'>

                                                    <FaRegHandPointRight /><li>{item}</li>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='future_enhancements'>
                            <h1>Future Enhancements:</h1>
                            <ul>

                                {
                                    projectDetailsFilter.future_enhancements.map((item, i) => {
                                        return (
                                            <>
                                                <div className='heading-icon'>

                                                    <FaRegHandPointRight /><li>{item}</li>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='conclusion'>
                            <h1>Conclusion:</h1>
                            <div className='heading-icon'>

                                <FaRegHandPointRight /><li>{projectDetailsFilter.conclusion}</li>
                            </div>
                        </div>
                    </>
                }
                {
                    !projectDetailsFilter.introduction && <>
                        <h1 style={{ color: "gold" }}>Not updated</h1>
                    </>
                }
                <div className='goback' style={{ textAlign: "center" }}>
                    <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
                </div>

            </div>
        </>
    )
}

export default PortfolioDetails