import { Link } from 'react-router-dom';

function DropdownOption(props) {
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

    function showTwo(event) {
        const options = [...document.querySelectorAll(".dropdown-column.one .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");
        const selectedName = selected.children[0].textContent;

        const twos = [...document.querySelectorAll(".dropdown-column.two .dropdown-option")]
        twos.forEach((two) => {
            const a = two.children[0];
            a.style.color = "black"

            two.style.display = "none";
            if (a.textContent in items[selectedName]) {
                two.style.display = "flex";
            }
        });

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })

        document.querySelector(".dropdown-column.one").style.display = "flex"
        document.querySelector(".dropdown-column.two").style.display = "flex"
        document.querySelector(".dropdown-column.three").style.display = "none"
    }
      
    function showThree(event) {
        const options = [...document.querySelectorAll(".dropdown-column.two .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");
        const secondName = selected.children[0].textContent;

        let firstName;
        const firsts = [...document.querySelectorAll(".dropdown-column.one .dropdown-option")];
        for (const i in firsts) {
            const curr = firsts[i];
            const a = curr.children[0];
            const color = a.style.getPropertyValue('color');
            if (color === "blue") firstName = a.textContent;
        }

        const thirds = [...document.querySelectorAll(".dropdown-column.three .dropdown-option")]
        console.log(items[firstName][secondName])
        thirds.forEach((third) => {
            const a = third.children[0];
            a.style.color = "black"

            third.style.display = "none";
            if (items[firstName][secondName].includes(a.textContent)) {
                third.style.display = "flex";
            }
        });

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })

        document.querySelector(".dropdown-column.one").style.display = "flex"
        document.querySelector(".dropdown-column.two").style.display = "flex"
        document.querySelector(".dropdown-column.three").style.display = "flex"
    }

    function colorThree(event) {
        const options = [...document.querySelectorAll(".dropdown-column.three .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");
        console.log(selected);

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })
    }

    function handleDropdown(col) {
        if (col === "1") {
            return showTwo;
        } else if (col === "2") {
            return showThree;
        } else if (col === "3") {
            return colorThree;
        }
    }
    
    if (props.arrow) {
        return (
            <div className={"dropdown-option "  + props.parent} onMouseOver={handleDropdown(props.col)}>
                <Link className="dropdown-name" to="/course">{props.name}</Link>
                <img className="dropdown-arrow" src={require("./icons/right-arrow.jpg")} alt="right arrow" />
            </div>
        );
    } else {
        return (
            <div className="dropdown-option" onMouseOver={handleDropdown(props.col)}>
                <Link className="dropdown-name" to="/course">{props.name}</Link>
            </div>
        );
    }
}

export default DropdownOption;