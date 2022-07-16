import DropdownOption from "./DropdownOption";

function DropdownMenu(props) {   
    function hideAll() {
        document.querySelector(".dropdown-column.one").style.display = "none"
        document.querySelector(".dropdown-column.two").style.display = "none"
        document.querySelector(".dropdown-column.three").style.display = "none"
    }

    return (
        <div className="dropdown-columns" onMouseLeave={hideAll}>
            <div className="dropdown-column one">
                <DropdownOption col="1" name="Development" arrow />
                <DropdownOption col="1" name="Photography & Video" arrow />
                <DropdownOption col="1" name="Music" arrow />
                <DropdownOption col="1" name="Finance & Accounting" arrow />
            </div>
            <div className="dropdown-column two">
                <DropdownOption col="2" name="Web Development" arrow />
                <DropdownOption col="2" name="Data Science" arrow />
                <DropdownOption col="2" name="Mobile Development" arrow />
                <DropdownOption col="2" name="Programming Languages" arrow />
                <DropdownOption col="2" name="Game Development" arrow />
                <DropdownOption col="2" name="Software Testing" arrow />
                <DropdownOption col="2" name="Database Design & Development" arrow />
                
                <DropdownOption col="2" name="Digital Photography" arrow />
                <DropdownOption col="2" name="Portrait Photography" arrow />
                <DropdownOption col="2" name="Photography Tools" arrow />
                <DropdownOption col="2" name="Commercial Photography" arrow />
                <DropdownOption col="2" name="Video Design" arrow />

                <DropdownOption col="2" name="Instruments" arrow />
                <DropdownOption col="2" name="Music Production" arrow />
                <DropdownOption col="2" name="Music Fundamentals" arrow />
                <DropdownOption col="2" name="Vocal" arrow />
                <DropdownOption col="2" name="Music Technique" arrow />
                <DropdownOption col="2" name="Music Software" arrow />

                <DropdownOption col="2" name="Accounting & Bookkeeping" arrow />
                <DropdownOption col="2" name="Compliance" arrow />
                <DropdownOption col="2" name="Cryptocurrency & Blockchain" arrow />
                <DropdownOption col="2" name="Economics" arrow />
                <DropdownOption col="2" name="Finance" arrow />
                <DropdownOption col="2" name="Investment & Trading" arrow />
                <DropdownOption col="2" name="Money Management Tools" arrow />
                <DropdownOption col="2" name="Taxes" arrow />

                <DropdownOption col="2" name="IT Certifications" arrow />
                <DropdownOption col="2" name="Network & Security" arrow />
                <DropdownOption col="2" name="Hardware" arrow />
                <DropdownOption col="2" name="Operating Systems & Servers" arrow />

                <DropdownOption col="2" name="Fitness" arrow />
                <DropdownOption col="2" name="General Health" arrow />
                <DropdownOption col="2" name="Sports" arrow />
                <DropdownOption col="2" name="Nutrition & Diet" arrow />
                <DropdownOption col="2" name="Yoga" arrow />
                <DropdownOption col="2" name="Mental Health" arrow />
                <DropdownOption col="2" name="Martial Arts & Self Defense" arrow />
                <DropdownOption col="2" name="Safety & First Aid" arrow />
                <DropdownOption col="2" name="Meditation" arrow />
            </div>
            <div className="dropdown-column three">
                <DropdownOption col="3" name="Python" />
                <DropdownOption col="3" name="Machine Learning" />
                <DropdownOption col="3" name="Deep Learning" />
                <DropdownOption col="3" name="Data Analysis" />
                <DropdownOption col="3" name="R" />
                <DropdownOption col="3" name="Statistics" />
                <DropdownOption col="3" name="Natural Language Processing" />

                <DropdownOption col="3" name="Javascript" />
                <DropdownOption col="3" name="React" /> 
                <DropdownOption col="3" name="Angular" /> 
                <DropdownOption col="3" name="CSS" /> 
                <DropdownOption col="3" name="Node.js" /> 
                <DropdownOption col="3" name="PHP" /> 
                <DropdownOption col="3" name="HTML5" /> 
                <DropdownOption col="3" name="Typescript" />

                <DropdownOption col="3" name="Google Flutter" />
                <DropdownOption col="3" name="iOS Development" /> 
                <DropdownOption col="3" name="Android Development" /> 
                <DropdownOption col="3" name="Swift" /> 
                <DropdownOption col="3" name="React Native" /> 
                <DropdownOption col="3" name="Dart" /> 
                <DropdownOption col="3" name="Kotlin" /> 

                <DropdownOption col="3" name="Java" /> 
                <DropdownOption col="3" name="C++" />
                <DropdownOption col="3" name="Go" />
                <DropdownOption col="3" name="C" />

                <DropdownOption col="3" name="Unity" />
                <DropdownOption col="3" name="Unreal Engine" />
                <DropdownOption col="3" name="Game Development Fundamentals" />
                <DropdownOption col="3" name="3D Game Development" />
                <DropdownOption col="3" name="2D Game Development" /> 
                <DropdownOption col="3" name="Mobile Game Development" />

                <DropdownOption col="3" name="Selenium WebDriver" /> 
                <DropdownOption col="3" name="Automation Testing" /> 
                <DropdownOption col="3" name="API Testing" /> 
                <DropdownOption col="3" name="Postman" /> 

                <DropdownOption col="3" name="SQL" /> 
                <DropdownOption col="3" name="MySQL" /> 
                <DropdownOption col="3" name="Oracle SQL" /> 
                <DropdownOption col="3" name="Database Management" />
                <DropdownOption col="3" name="MongoDB" /> 
                <DropdownOption col="3" name="Apache Kafka" /> 
                <DropdownOption col="3" name="SQL Server" /> 
                <DropdownOption col="3" name="PostreSQL" /> 
                <DropdownOption col="3" name="Database Programming" />

                <DropdownOption col="3" name="iPhone Photography" />
                <DropdownOption col="3" name="Digital Camera Functionality" />
                <DropdownOption col="3" name="GIMP" />
                <DropdownOption col="3" name="Mobile Photography" />
                <DropdownOption col="3" name="3D Animation" />
                <DropdownOption col="3" name="Adobe Lightroom" />
                <DropdownOption col="3" name="Affinity Pho" />

                <DropdownOption col="3" name="Posing" /> 
                <DropdownOption col="3" name="Photoshop Retouching" /> 
                <DropdownOption col="3" name="Photography Lighting" /> 
                <DropdownOption col="3" name="Family Portrait Photography" /> 
                <DropdownOption col="3" name="Photography Business" /> 
                <DropdownOption col="3" name="Photoshop" /> 
                <DropdownOption col="3" name="Flash Photography" />

                <DropdownOption col="3" name="Image Editing" /> 
                <DropdownOption col="3" name="Drone and Aerial Photography" /> 
                <DropdownOption col="3" name="Capture One" />

                <DropdownOption col="3" name="Real Estate Photography" /> 
                <DropdownOption col="3" name="Architecture Photography" /> 
                <DropdownOption col="3" name="Product Photography" /> 
                <DropdownOption col="3" name="Food Photography" /> 
                <DropdownOption col="3" name="Wedding Photography" /> 
                <DropdownOption col="3" name="Marketing Strategy" />

                <DropdownOption col="3" name="Video Editing" /> 
                <DropdownOption col="3" name="Adobe Premiere" /> 
                <DropdownOption col="3" name="Video Production" /> 
                <DropdownOption col="3" name="DaVinci Resolve" /> 
                <DropdownOption col="3" name="Filmmaking" /> 
                <DropdownOption col="3" name="After Effects" /> 
                <DropdownOption col="3" name="Cinematography" /> 
                <DropdownOption col="3" name="Videography" /> 
                <DropdownOption col="3" name="Color Grading" />

                <DropdownOption col="3" name="Guitar" /> 
                <DropdownOption col="3" name="Piano" /> 
                <DropdownOption col="3" name="Keyboard Instrument" /> 
                <DropdownOption col="3" name="Drums" /> 
                <DropdownOption col="3" name="Bass Guitar" /> 
                <DropdownOption col="3" name="Ukulele" /> 
                <DropdownOption col="3" name="Fingerstyle Guitar" /> 
                <DropdownOption col="3" name="Violin" /> 
                <DropdownOption col="3" name="Harmonica" />
                <DropdownOption col="3" name="Logic Pro" /> 
                <DropdownOption col="3" name="Music Mixing" /> 
                <DropdownOption col="3" name="Ableton Live" /> 
                <DropdownOption col="3" name="FL Studio" /> 
                <DropdownOption col="3" name="Music Composition" /> 
                <DropdownOption col="3" name="Game Music" /> 
                <DropdownOption col="3" name="Audio Engineering" /> 
                <DropdownOption col="3" name="Audio Production" />
                <DropdownOption col="3" name="Music Theory" /> 
                <DropdownOption col="3" name="Songwriting" /> 
                <DropdownOption col="3" name="Electronic Music" /> 
                <DropdownOption col="3" name="Reading Music" /> 
                <DropdownOption col="3" name="Ear Training" /> 
                <DropdownOption col="3" name="Classical Music" /> 
                <DropdownOption col="3" name="Piano Chords" />
                <DropdownOption col="3" name="Singing" /> 
                <DropdownOption col="3" name="Voice Training" /> 
                <DropdownOption col="3" name="Voice Acting" /> 
                <DropdownOption col="3" name="Raga Music" /> 
                <DropdownOption col="3" name="Rapping" /> 
                <DropdownOption col="3" name="Voice-Over" /> 
                <DropdownOption col="3" name="Quran" /> 
                <DropdownOption col="3" name="Yoga" /> 
                <DropdownOption col="3" name="Blues Guitar" /> 
                <DropdownOption col="3" name="DJ" /> 
                <DropdownOption col="3" name="Reading Music" /> 
                <DropdownOption col="3" name="Rock Guitar" />
                <DropdownOption col="3" name="Logic Pro" /> 
                <DropdownOption col="3" name="Music Production" /> 
                <DropdownOption col="3" name="GarageBand" /> 
                <DropdownOption col="3" name="ProTools" /> 
                <DropdownOption col="3" name="Cubase" />
                
                <DropdownOption col="3" name="Sound Therapy" />
                <DropdownOption col="3" name="Mindfulness" />
                <DropdownOption col="3" name="Qi Gong" />
                <DropdownOption col="3" name="Reiki" />
                <DropdownOption col="3" name="Breathing Techniques" />
                <DropdownOption col="3" name="Energy Healing" />
                <DropdownOption col="3" name="Astral Projection" />
                <DropdownOption col="3" name="First Aid" />
                <DropdownOption col="3" name="Herbalism" />
                <DropdownOption col="3" name="Workplace Health and Safety" />
                <DropdownOption col="3" name="Fire Safety" />
                <DropdownOption col="3" name="Survival Skills" />
                <DropdownOption col="3" name="OSHA" />
                <DropdownOption col="3" name="Grief Healing" />
                <DropdownOption col="3" name="Health" />
                <DropdownOption col="3" name="Kinesiology Taping" />
                <DropdownOption col="3" name="Krav Maga" />
                <DropdownOption col="3" name="Self-Defense" />
                <DropdownOption col="3" name="Martial Arts" />
                <DropdownOption col="3" name="Boxing"/>
                <DropdownOption col="3" name="Close Combat" />
                <DropdownOption col="3" name="Tai Chi" />
                <DropdownOption col="3" name="Brazilian Jiu-Jitsu" />
                <DropdownOption col="3" name="Wing Chun" />
                <DropdownOption col="3" name="Muay Thai" />

                <DropdownOption col="3" name="CBT Cognitive Behavioral Therapy" />
                <DropdownOption col="3" name="Art Therapy" />
                <DropdownOption col="3" name="Psychology" />
                <DropdownOption col="3" name="Psychotherapy" />
                <DropdownOption col="3" name="Dialetical Behavior Therapy (DBT)" />
                <DropdownOption col="3" name="Acceptance and Commitment Therapy (ACT)" />
                <DropdownOption col="3" name="Counseling" />
                <DropdownOption col="3" name="REBT" />
                <DropdownOption col="3" name="Yoga for Kids" />
                <DropdownOption col="3" name="Pranayama" />
                <DropdownOption col="3" name="Chair Yoga" />
                <DropdownOption col="3" name="Face Yoga" />
                <DropdownOption col="3" name="Parental Yoga" />
                <DropdownOption col="3" name="Kundalini" />
                <DropdownOption col="3" name="Nutrition" />
                <DropdownOption col="3" name="Dieting" />
                <DropdownOption col="3" name="Health Coaching" />
                <DropdownOption col="3" name="Weight Loss" />
                <DropdownOption col="3" name="Sports Nutrition" />
                <DropdownOption col="3" name="Vegan Cooking" />
                <DropdownOption col="3" name="Ketogenic Diet" />
                <DropdownOption col="3" name="Gut Health" />

                <DropdownOption col="3" name="Swimming" />
                <DropdownOption col="3" name="Sport Psychology" />
                <DropdownOption col="3" name="Soccer" />
                <DropdownOption col="3" name="Tennis" />
                <DropdownOption col="3" name="Sports Coaching" />
                <DropdownOption col="3" name="Golf" />
                <DropdownOption col="3" name="Sports Massage" />
                <DropdownOption col="3" name="Running" />
                <DropdownOption col="3" name="Sports Management" />

                <DropdownOption col="3" name="Holistic Medicine" />
                <DropdownOption col="3" name="Massage" />
                <DropdownOption col="3" name="Natural Medicine" />
                <DropdownOption col="3" name="Aromatherapy" />
                <DropdownOption col="3" name="Reflexology" />
                <DropdownOption col="3" name="Accupressure" />
                <DropdownOption col="3" name="Ayurveda" />
                <DropdownOption col="3" name="Pilates" />
                <DropdownOption col="3" name="Muscle Building" />
                <DropdownOption col="3" name="Home Workout" />
                <DropdownOption col="3" name="Strength Training" />
                <DropdownOption col="3" name="Stretching Exercise" />
                <DropdownOption col="3" name="Barre Workout" />

                <DropdownOption col="3" name="Linux" />
                <DropdownOption col="3" name="Linux Administration" />
                <DropdownOption col="3" name="Windows Server" />
                <DropdownOption col="3" name="Shell Scripting" />
                <DropdownOption col="3" name="Active Directory" />
                <DropdownOption col="3" name="PowerShell" />
                <DropdownOption col="3" name="Linux Command Line" />
                <DropdownOption col="3" name="VMware Vsphere" />
                <DropdownOption col="3" name="LPIC-1: Linux Administrator" />

                <DropdownOption col="3" name="PLC" />
                <DropdownOption col="3" name="Arduino" />
                <DropdownOption col="3" name="Electronics" />
                <DropdownOption col="3" name="Microcontroller" />
                <DropdownOption col="3" name="Embedded Systems" />
                <DropdownOption col="3" name="Raspberry Pi" />
                <DropdownOption col="3" name="Embedded C" />
                <DropdownOption col="3" name="FPGA" />
                <DropdownOption col="3" name="Cell Phone Repair" />

                <DropdownOption col="3" name="Ethical Hacking" />
                <DropdownOption col="3" name="Cyber Security" />
                <DropdownOption col="3" name="Network Security" />
                <DropdownOption col="3" name="Penetration Testing" />
                <DropdownOption col="3" name="CompTIA Network+" />
                <DropdownOption col="3" name="Kubernetes" />
                <DropdownOption col="3" name="IT Networking Fundamentals" />
                <DropdownOption col="3" name="Terraform" />
                <DropdownOption col="3" name="Wireshark" />
                <DropdownOption col="3" name="AWS Certification" />
                <DropdownOption col="3" name="Microsoft Certification" />
                <DropdownOption col="3" name="AWS Certified Solutions Architect - Associate" />
                <DropdownOption col="3" name="AWS Certified Cloud Practitioner" />
                <DropdownOption col="3" name="CompTIA A+" />
                <DropdownOption col="3" name="Amazon AWS" />
                <DropdownOption col="3" name="Cisco CCNA" />
                <DropdownOption col="3" name="CompTIA Security+" />
                <DropdownOption col="3" name="Microsoft AZ-900" />

                <DropdownOption col="3" name="Accounting" />
                <DropdownOption col="3" name="Bookkeeping" />
                <DropdownOption col="3" name="Financial Accounting" />
                <DropdownOption col="3" name="Finance Fundamentals" />
                <DropdownOption col="3" name="QuickBooks Online" />
                <DropdownOption col="3" name="Startup" />
                <DropdownOption col="3" name="IFRS" />
                <DropdownOption col="3" name="QuickBooks" />
                <DropdownOption col="3" name="SAP FICO" />
                <DropdownOption col="3" name="Anti-Money Laundering" />
                <DropdownOption col="3" name="Sarbanes-Oxley (SOX)" />
                <DropdownOption col="3" name="Internal Controls" />
                <DropdownOption col="3" name="CAMS Certification" />
                <DropdownOption col="3" name="Internal Auditing" />
                <DropdownOption col="3" name="Risk Management" />
                <DropdownOption col="3" name="Enterprise Risk Management (ERM)" />
                <DropdownOption col="3" name="Trade and Commerce" />
                <DropdownOption col="3" name="Fraud Analytics" />
                <DropdownOption col="3" name="Cryptocurrency" />
                <DropdownOption col="3" name="NFT (Non-Fungible Tokens)" />
                <DropdownOption col="3" name="Blockchain" />
                <DropdownOption col="3" name="Bitcoin" />
                <DropdownOption col="3" name="Metaverse" />
                <DropdownOption col="3" name="Binance" />
                <DropdownOption col="3" name="Day Trading" />
                <DropdownOption col="3" name="Online Arbitrage" />
                <DropdownOption col="3" name="Algorithmic Trading" />
                <DropdownOption col="3" name="Macroeconomics" />
                <DropdownOption col="3" name="Microeconomics" />
                <DropdownOption col="3" name="Stata" />
                <DropdownOption col="3" name="Econometrics" />
                <DropdownOption col="3" name="Global Economics" />
                <DropdownOption col="3" name="Political Science" />
                <DropdownOption col="3" name="Regression Analysis" />
                <DropdownOption col="3" name="Personal Finance" />
                <DropdownOption col="3" name="Investment Banking" />
                <DropdownOption col="3" name="CFA" />
                <DropdownOption col="3" name="Financial Management" />
                <DropdownOption col="3" name="Corporate Finance" />
                <DropdownOption col="3" name="Financial Analysis" />
                <DropdownOption col="3" name="Banking" />
                <DropdownOption col="3" name="Stock Trading" />
                <DropdownOption col="3" name="Investing" />
                <DropdownOption col="3" name="Forex" />
                <DropdownOption col="3" name="Technical Analysis" />
                <DropdownOption col="3" name="Options Trading" />
                <DropdownOption col="3" name="Financial Markets" />
                <DropdownOption col="3" name="Financial Trading" />
                <DropdownOption col="3" name="Excel" />
                <DropdownOption col="3" name="Xero" />
                <DropdownOption col="3" name="QuickBooks Pro" />
                <DropdownOption col="3" name="Finanical Analysis" />
                <DropdownOption col="3" name="Excel Analytics" />
                <DropdownOption col="3" name="Financial Modeling" />
                <DropdownOption col="3" name="Tax Preparation" />
                <DropdownOption col="3" name="Goods and Services Tax" />
                <DropdownOption col="3" name="Value Added Tax (VAT)" />
                <DropdownOption col="3" name="Law" />
                <DropdownOption col="3" name="Home Business" />
                <DropdownOption col="3" name="Business Strategy"/>
            </div>
        </div>
    );
}

export default DropdownMenu;