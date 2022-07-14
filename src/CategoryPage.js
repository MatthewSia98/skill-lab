import { Link, useRouteMatch } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import CourseCard from './CourseCard'
import Carousel from './Carousel'

function CategoryPage() {
    const items = {
        "Development": {"Web Development": ["Javascript", "React", "Angular", "CSS", "Node.js", "PHP", "HTML5", "Typescript"],
                        "Data Science": ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "R", "Statistics", "Natural Language Processing"],
                        "Mobile Development": ["Google Flutter", "iOS Development", "Android Development", "Swift", "React Native", "Dart", "Kotlin"],
                        "Programming Languages": ["Python", "Java", "C#", "React", "C++", "Javascript", "Go", "C"],
                        "Game Development": ["Unity", "Unreal Engine", "Game Development Fundamentals", "C#", "3D Game Development", "C++", "2D Game Development", "Mobile Game Development"],
                        "Software Testing": ["Selenium WebDriver", "Java", "Automation Testing", "API Testing", "Postman", "Javascript"],
                        "Database Design & Development": ["SQL", "MySQL", "Oracle SQL", "Database Management", "MongoDB", "Apache Kafka", "SQL Server", "PostreSQL", "Database Programming"]
                       },
        "Photography & Video" : {"Digital Photography": ["iPhone Photography", "Digital Camera Functionality", "GIMP", "Mobile Photography", "3D Animation", "Adobe Lightroom", "Affinity Photo"],
                                 "Portrait Photography": ["Posing", "Photoshop Retouching", "Photography Lighting", "Family Portrait Photography", "Photography Business", "Photoshop", "Flash Photography"],
                                 "Photography Tools": ["Adobe Lightroom", "Photoshop", "Image Editing", "Affinity Photo", "Photoshop Retouching", "Digital Camera Functionality", "Drone and Aerial Photography", "Capture One"],
                                 "Commercial Photography": ["Real Estate Photography", "Architecture Photography", "Photography Business", "Product Photography", "Food Photography", "Photoshop Retouching", "Wedding Photography", "Marketing Strategy"],
                                 "Video Design": ["Video Editing", "Adobe Premiere", "Video Production", "DaVinci Resolve", "Filmmaking", "After Effects", "Cinematography", "Videography", "Color Grading"]
                                },
        "Music": {"Instruments": ["Guitar", "Piano", "Keyboard Instrument", "Drums", "Bass Guitar", "Ukulele", "Fingerstyle Guitar", "Violin", "Harmonica"],
                  "Music Production": ["Logic Pro", "Music Mixing", "Ableton Live", "FL Studio", "Music Composition", "Game Music", "Audio Engineering", "Audio Production"],
                  "Music Fundamentals": ["Music Theory", "Music Composition", "Songwriting", "Electronic Music", "Reading Music", "Ear Training", "Piano", "Classical Music", "Piano Chords"],
                  "Vocal": ["Singing", "Voice Training", "Voice Acting", "Raga Music", "Rapping", "Voice-Over", "Quran", "Yoga", "Breathing Techniques"],
                  "Music Technique": ["Fingerstyle Guitar", "Blues Guitar", "Music Composition", "DJ", "Music Theory", "Reading Music", "Guitar", "Rock Guitar", "Piano"],
                  "Music Software": ["FL Studio", "Ableton Live", "Logic Pro", "Music Production", "GarageBand", "ProTools", "Cubase", "DJ", "Music Mixing"]
                 },
        "Finance & Accounting": {"Accounting & Bookkeeping": ["Accounting", "Bookkeeping", "Financial Accounting", "Finance Fundamentals", "QuickBooks Online", "Startup", "IFRS", "QuickBooks", "SAP FICO"],
                                 "Compliance": ["Anti-Money Laundering", "Sarbanes-Oxley (SOX)", "Internal Controls", "CAMS Certification", "Internal Auditing", "Risk Management", "Enterprise Risk Management (ERM)", "Trade and Commerce", "Fraud Analytics"],
                                 "Cryptocurrency & Blockchain": ["Cryptocurrency", "NFT (Non-Fungible Tokens)", "Blockchain", "Bitcoin", "Metaverse", "Binance", "Day Trading", "Online Arbitrage", "Algorithmic Trading"],
                                 "Economics": ["Macroeconomics", "Microeconomics", "Stata", "Econometrics", "Finance Fundamentals", "Global Economics", "Political Science", "Regression Analysis"],
                                 "Finance": ["Personal Finance", "Investment Banking", "Finance Fundamentals", "CFA", "Financial Management", "Corporate Finance", "Financial Analysis", "Banking", "Accounting"],
                                 "Investing & Trading": ["Stock Trading", "Investing", "Forex", "Technical Analysis", "Algorithmic Trading", "Options Trading", "Day Trading", "Financial Markets", "Financial Trading"],
                                 "Money Management Tools": ["QuickBooks Online", "QuickBooks", "SAP FICO", "Excel", "Xero", "QuickBooks Pro", "Finanical Analysis", "Excel Analytics", "Financial Modeling"],
                                 "Taxes": ["Tax Preparation", "Accounting", "Goods and Services Tax", "Value Added Tax (VAT)", "QuickBooks Online", "Financial Accounting", "Law", "Home Business", "Business Strategy"]
                                },
        "IT & Software": {"IT Certifications": ["AWS Certification", "Microsoft Certification", "AWS Certified Solutions Architect - Associate", "AWS Certified Cloud Practitioner", "CompTIA A+", "Amazon AWS", "Cisco CCNA", "CompTIA Security+", "Microsoft AZ-900"],
                          "Network & Security": ["Ethical Hacking", "Cyber Security", "Network Security", "Penetration Testing", "CompTIA Network+", "Kubernetes", "IT Networking Fundamentals", "Terraform", "Wireshark"],
                          "Hardware": ["PLC", "Arduino", "Electronics", "Microcontroller", "Embedded Systems", "Raspberry Pi", "Embedded C", "FPGA", "Cell Phone Repair"],
                          "Operating Systems & Servers": ["Linux", "Linux Administration", "Windows Server", "Shell Scripting", "Active Directory", "PowerShell", "Linux Command Line", "VMware Vsphere", "LPIC-1: Linux Administrator"]
                         },
        "Health & Fitness": {"Fitness": ["Pilates", "Muscle Building", "Home Workout", "Teacher Training", "Strength Training", "Weight Loss", "Stretching Exercise", "Barre Workout"],
                             "General Health": ["Herbalism", "Holistic Medicine", "Massage", "Natural Medicine", "Aromatherapy", "Reflexology", "Accupressure", "Health", "Ayurveda"],
                             "Sports": ["Swimming", "Sport Psychology", "Soccer", "Tennis", "Sports Coaching", "Golf", "Sports Massage", "Running", "Sports Management"],
                             "Nutrition & Diet": ["Nutrition", "Dieting", "Health Coaching", "Weight Loss", "Sports Nutrition", "Vegan Cooking", "Ketogenic Diet", "Gut Health", "Herbalism"],
                             "Yoga": ["Yoga for Kids", "Breathing Techniques", "Pranayama", "Chair Yoga", "Face Yoga", "Parental Yoga", "Kundalini", "Teacher Training"],
                             "Mental Health": ["CBT Cognitive Behavioral Therapy", "Art Therapy", "Psychology", "Psychotherapy", "Dialetical Behavior Therapy (DBT)", "Acceptance and Commitment Therapy (ACT)", "Counseling", "REBT"],
                             "Martial Arts & Self Defense": ["Krav Maga", "Self-Defense", "Martial Arts", "Boxing", "Close Combat", "Tai Chi", "Brazilian Jiu-Jitsu", "Wing Chun", "Muay Thai"],
                             "Safety & First Aid": ["First Aid", "Herbalism", "Workplace Health and Safety", "Fire Safety", "Survival Skills", "OSHA", "Grief Healing", "Health", "Kinesiology Taping"],
                             "Meditation": ["Sound Therapy", "Mindfulness", "Qi Gong", "Reiki", "Breathing Techniques", "Yoga", "Energy Healing", "Astral Projection"]
                            }
    };

    const params = useRouteMatch().params;
    const col = params['col'];
    const category = params['name'];

    if (col === '1') {
        const seconds = items[category];
        const secondKeys = Object.keys(seconds);

        const secondDivs = [];
        for (let i = 0; i < secondKeys.length; i++) {
            let backgroundColor;
            if (i % 2 === 0) backgroundColor = 'pink';
            else backgroundColor = 'green'; 

            secondDivs.push(<CategoryCard first={category} second={secondKeys[i]} key={i} style={{background: backgroundColor}} />);
        }

        return (
            <div className="category-page">
                <h1>{category}</h1>
                <div className="seconds">{secondDivs}</div>
            </div>
        );
    } else if (col === '2') {
        const firsts = Object.keys(items);
        var selectedFirst;
        for (let i = 0; i < firsts.length; i++) {
            const currFirst = firsts[i];
            if (category in items[currFirst]) selectedFirst = currFirst;
        }

        const thirds = items[selectedFirst][category]
        const courseDivs = [];
        for (let i = 0; i < thirds.length; i++) {
            const currThird = thirds[i];
            let path;
            if (i % 4 === 0) path = './images/what-is-web-development.png';
            else if (i % 4 === 1) path = './images/making-your-first-web-app.png';
            else if (i % 4 === 2) path = './images/html-for-beginners.png';
            else path = './images/learn-bootstrap.png'

            courseDivs.push(<CourseCard path={path} name={currThird} org="freeCodeCamp" key={i} />);
        }

        return (
            <div className="category-page">
                <div className="breadcrumb">
                    <h1><Link to={'/category/1/' + selectedFirst}>{selectedFirst}</Link></h1> 
                    <pre>  >  </pre>
                    <h1>{category}</h1>
                </div>
                <Carousel items={courseDivs} />
            </div>
        );
    }
}

export default CategoryPage;