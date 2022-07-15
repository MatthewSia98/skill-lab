import Navbar from './Navbar';
import Home from './Home';
import Course from './Course';
import Login from './Login';
import Signup from './Signup';
import CategoryPage from './CategoryPage';
import OnlineDegrees from './OnlineDegrees';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export const videolinks = {
  'Javascript': 'https://www.youtube.com/embed/PkZNo7MFNFg',
  'React': 'https://www.youtube.com/embed/bMknfKXIFA8',
  'Angular': 'https://www.youtube.com/embed/AAu8bjj6-UI',
  'CSS': 'https://www.youtube.com/embed/1Rs2ND1ryYc',
  'Node.js': 'https://www.youtube.com/embed/Oe421EPjeBE',
  'PHP': 'https://www.youtube.com/embed/OK_JCtrrv-c',
  'HTML5': 'https://www.youtube.com/embed/mU6anWqZJcc',
  'Typescript': 'https://www.youtube.com/embed/gp5H0Vw39yw',
  'Python': 'https://www.youtube.com/embed/rfscVS0vtbw',
  'Machine Learning': 'https://www.youtube.com/embed/NWONeJKn6kc',
  'Deep Learning': 'https://www.youtube.com/embed/VyWAvY2CF9c',
  'Data Analysis': 'https://www.youtube.com/embed/r-uOLxNrNk8',
  'R': 'https://www.youtube.com/embed/_V8eKsto3Ug',
  'Statistics': 'https://www.youtube.com/embed/xxpc-HPKN28',
  'Natural Language Processing': 'https://www.youtube.com/embed/dIUTsFT2MeQ',
  'iPhone Photography': 'https://www.youtube.com/embed/eWLbp5mOPHc',
  'Digital Camera Functionality': 'https://www.youtube.com/embed/LUxTnBz0vcI',
  'GIMP': 'https://www.youtube.com/embed/_L_MMU22bAw',
  'Mobile Photography': 'https://www.youtube.com/embed/dQymfKW34XY',
  '3D Animation': 'https://www.youtube.com/embed/VT5oZndzj68',
  'Adobe Lightroom': 'https://www.youtube.com/embed/bN2jqsJgbBs',
  'Affinity Photo': 'https://www.youtube.com/embed/lDQn7Ol1z2Q',
  'Personal Finance': 'https://www.youtube.com/embed/zVcwvCL2C2c',
  'Investment Banking': 'https://www.youtube.com/embed/eVu99Mr45H8',
  'Finance Fundamentals': 'https://www.youtube.com/embed/WEDIj9JBTC8',
  'CFA': 'https://www.youtube.com/embed/WrJWaLPJnRA',
  'Financial Management': 'https://www.youtube.com/embed/WNm_ez1h7Tc',
  'Corporate Finance': 'https://www.youtube.com/embed/5eGRi66iUfU',
  'Financial Analysis': 'https://www.youtube.com/embed/8NelYFn07jg',
  'Banking': 'https://www.youtube.com/embed/fTTGALaRZoc',
  'Accounting': 'https://www.youtube.com/embed/yYX4bvQSqbo',
  'Pilates': 'https://www.youtube.com/embed/ywzZXO-A7Pg',
  'Muscle Building': 'https://www.youtube.com/embed/XLr2RKoD-oY',
  'Home Workout': 'https://www.youtube.com/embed/vc1E5CfRfos',
  'Strength Training': 'https://www.youtube.com/embed/-5ztdzyQkSQ',
  'Weight Loss': 'https://www.youtube.com/embed/GGP3NbP7O2w',
  'Stretching Exercise': 'https://www.youtube.com/embed/g_tea8ZNk5A',
  'Barre Workout': 'https://www.youtube.com/embed/sAapLQCASOE',
  'Logic Pro': 'https://www.youtube.com/embed/nZ8UtZNOrfY',
  'Music Mixing': 'https://www.youtube.com/embed/yRzMby4PXzc',
  'Ableton Live': 'https://www.youtube.com/embed/H83TxBL3yOE',
  'FL Studio': 'https://www.youtube.com/embed/pDIsEZsalAo',
  'Music Composition': 'https://www.youtube.com/embed/l8L-EELwuhg',
  'Game Music': 'https://www.youtube.com/embed/_cpMpIegdOI',
  'Audio Engineering': 'https://www.youtube.com/embed/lq1OeBfgINc',
  'Audio Production': 'https://www.youtube.com/embed/qonbJHkxH8w',
  'Macroeconomics': 'https://www.youtube.com/embed/MKO1icFVtDc',
  'Microeconomics': 'https://www.youtube.com/embed/1UxA6JzoT-4',
  'Stata': 'https://www.youtube.com/embed/rdFw-fBfygQ',
  'Econometrics': 'https://www.youtube.com/embed/vEP4RIOKuE4',
  'Global Economics': 'https://www.youtube.com/embed/ipMiv2vQGqk',
  'Political Science': 'https://www.youtube.com/embed/jQK0Xbfel-M',
  'Regression Analysis': 'https://www.youtube.com/embed/0m-rs2M7K-Y',
  'Google Flutter': 'https://www.youtube.com/embed/VPvVD8t02U8',
  'iOS Development': 'https://www.youtube.com/embed/KCgYDCKqato',
  'Android Development': 'https://www.youtube.com/embed/fis26HvvDII',
  'Swift': 'https://www.youtube.com/embed/comQ1-x2a1Q',
  'React Native': 'https://www.youtube.com/embed/frvXANSaSec',
  'Dart': 'https://www.youtube.com/embed/Ej_Pcr4uC2Q',
  'Kotlin': 'https://www.youtube.com/embed/F9UC9DY-vIU',
  'Java': 'https://www.youtube.com/embed/GoXwIVyNvX0',
  'C++': 'https://www.youtube.com/embed/vLnPwxZdW4Y',
  'Go': 'https://www.youtube.com/embed/YS4e4q9oBaU',
  'C': 'https://www.youtube.com/embed/KJgsSFOSQv0',
  'Unity': 'https://www.youtube.com/embed/gB1F9G0JXOo',
  'Unreal Engine': 'https://www.youtube.com/embed/LsNW4FPHuZE',
  'Game Development Fundamentals': 'https://www.youtube.com/embed/jZqYXSmgDuM',
  '3D Game Development': 'https://www.youtube.com/embed/MOqpJp5ZyDE',
  '2D Game Development': 'https://www.youtube.com/embed/iHF5fwsqu4I',
  'Mobile Game Development': 'https://www.youtube.com/embed/LSTtMHMQFkY',
  'Selenium WebDriver': 'https://www.youtube.com/embed/Wd8SxdtIx4w',
  'Automation Testing': 'https://www.youtube.com/embed/QtZ4yV49RtA',
  'API Testing': 'https://www.youtube.com/embed/VywxIQ2ZXw4',
  'Postman': 'https://www.youtube.com/embed/VywxIQ2ZXw4',
  'SQL': 'https://www.youtube.com/embed/HXV3zeQKqGY',
  'MySQL': 'https://www.youtube.com/embed/7S_tz1z_5bA',
  'Oracle SQL': 'https://www.youtube.com/embed/1o0c-zD3iFU',
  'Database Management': 'https://www.youtube.com/embed/4cWkVbC2bNE',
  'MongoDB': 'https://www.youtube.com/embed/pWbMrx5rVBE',
  'Apache Kafka': 'https://www.youtube.com/embed/R873BlNVUB4',
  'SQL Server': 'https://www.youtube.com/embed/-EPMOaV7h_Q',
  'PostgreSQL': 'https://www.youtube.com/embed/qw--VYLpxG4',
  'Database Programming': 'https://www.youtube.com/embed/lFRMdGfo_XA'
}

export const imagepaths = {
  'Javascript': 'Javascript.jpg',
  'React': 'React.png',
  'Angular': 'Angular.webp',
  'CSS': 'CSS.png',
  'Node.js': 'Nodejs.jpg',
  'PHP': 'PHP.png',
  'HTML5': 'HTML5.webp',
  'Typescript': 'Typescript.png',
  'Python': 'Python.png',
  'Machine Learning': 'MachineLearning.png',
  'Deep Learning': 'DeepLearning.jpeg',
  'Data Analysis': 'DataAnalysis.jfif',
  'R': 'R.jpg',
  'Statistics': 'Statistics.jpg',
  'Natural Language Processing': 'NaturalLanguageProcessing.png',
  'iPhone Photography': 'iPhonePhotography.jpeg',
  'Digital Camera Functionality': 'DigitalCameraFunctionality.webp',
  'GIMP': 'GIMP.webp',
  'Mobile Photography': 'MobilePhotography.jpg',
  '3D Animation': '3DAnimation.jpg',
  'Adobe Lightroom': 'AdobeLightroom.jpg',
  'Affinity Photo': 'AffinityPhoto.jpg',
  'Personal Finance': 'PersonalFinance.png',
  'Investment Banking': 'InvestmentBanking.jpg',
  'Finance Fundamentals': 'FinanceFundamentals.jpg',
  'CFA': 'CFA.webp',
  'Financial Management': 'FinancialManagement.jpg',
  'Corporate Finance': 'CorporateFinance.jpg',
  'Financial Analysis': 'FinancialAnalysis.jpg',
  'Banking': 'Banking.webp',
  'Accounting': 'Accounting.jpg',
  'Pilates': 'Pilates.jpg',
  'Muscle Building': 'MuscleBuilding.jpg',
  'Home Workout': 'HomeWorkout.jpg',
  'Strength Training': 'StrengthTraining.jpg',
  'Weight Loss': 'WeightLoss.jpg',
  'Stretching Exercise': 'StretchingExercise.jpg',
  'Barre Workout': 'BarreWorkout.jpg',
  'Logic Pro': 'LogicPro.jpg',
  'Music Mixing': 'MusicMixing.jpg',
  'Ableton Live': 'AbletonLive.jpeg',
  'FL Studio': 'FLStudio.png',
  'Music Composition': 'MusicComposition.jpg',
  'Game Music': 'GameMusic.jfif',
  'Audio Engineering': 'AudioEngineering.webp',
  'Audio Production': 'AudioProduction.jpg',
  'Macroeconomics': 'Macroeconomics.jpg',
  'Microeconomics': 'Microeconomics.jfif',
  'Stata': 'Stata.jpg',
  'Econometrics': 'Econometrics.jpg',
  'Global Economics': 'GlobalEconomics.jpg',
  'Political Science': 'PoliticalScience.jpg',
  'Regression Analysis': 'RegressionAnalysis.jpg',
  'Google Flutter': 'GoogleFlutter.jpg',
  'iOS Development': 'iOSDevelopment.jpg',
  'Android Development': 'AndroidDevelopment.jpg',
  'Swift': 'Swift.jpg',
  'React Native': 'ReactNative.jpg',
  'Dart': 'Dart.jpg',
  'Kotlin': 'Kotlin.png',
  'Java': 'Java.jpg',
  'C++': 'C++.png',
  'Go': 'Go.jpg',
  'C': 'C.jpg',
  'Unity': 'Unity.png',
  'Unreal Engine': 'UnrealEngine.jpg',
  'Game Development Fundamentals': 'GameDevelopmentFundamentals.jpg',
  '3D Game Development': '3DGameDevelopment.jpg',
  '2D Game Development': '2DGameDevelopment.jpg',
  'Mobile Game Development': 'MobileGameDevelopment.png',
  'Selenium WebDriver': 'SeleniumWebDriver.jpg',
  'Automation Testing': 'AutomationTesting.png',
  'API Testing': 'APITesting.png',
  'Postman': 'Postman.jpg',
  'SQL': 'SQL.jpeg',
  'MySQL': 'MySQL.jpg',
  'Oracle SQL': 'OracleSQL.png',
  'Database Management': 'DatabaseManagement.png',
  'MongoDB': 'MongoDB.png',
  'Apache Kafka': 'ApacheKafka.jpg',
  'SQL Server': 'SQLServer.jpg',
  'PostgreSQL': 'PostgreSQL.png',
  'Database Programming': 'DatabaseProgramming.webp'
};

export const items = {
  "Development": {"Web Development": ["Javascript", "React", "Angular", "CSS", "Node.js", "PHP", "HTML5", "Typescript"],
                  "Data Science": ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "R", "Statistics", "Natural Language Processing"],
                  "Mobile Development": ["Google Flutter", "iOS Development", "Android Development", "Swift", "React Native", "Dart", "Kotlin"],
                  "Programming Languages": ["Python", "Java", "React", "C++", "Javascript", "Go", "C"],
                  "Game Development": ["Unity", "Unreal Engine", "Game Development Fundamentals", "3D Game Development", "C++", "2D Game Development", "Mobile Game Development"],
                  "Software Testing": ["Selenium WebDriver", "Java", "Automation Testing", "API Testing", "Postman", "Javascript"],
                  "Database Design & Development": ["SQL", "MySQL", "Oracle SQL", "Database Management", "MongoDB", "Apache Kafka", "SQL Server", "PostgreSQL", "Database Programming"]
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
  "Health & Fitness": {"Fitness": ["Pilates", "Muscle Building", "Home Workout", "Strength Training", "Weight Loss", "Stretching Exercise", "Barre Workout"],
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/course/:name">
            <Course />
          </Route>
          <Route exact path="/category/:col/:name">
            <CategoryPage />
          </Route>
          <Route path="/online-degrees">
            <OnlineDegrees />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
