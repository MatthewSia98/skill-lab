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
                <DropdownOption col="1" name="IT & Software" arrow />
                <DropdownOption col="1" name="Health & Fitness" arrow />
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
                <DropdownOption col="3" name="C#" />
                <DropdownOption col="3" name="React" /> 
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
                <DropdownOption col="3" name="Breathing Techniques" /> 
                <DropdownOption col="3" name="Blues Guitar" /> 
                <DropdownOption col="3" name="DJ" /> 
                <DropdownOption col="3" name="Reading Music" /> 
                <DropdownOption col="3" name="Rock Guitar" />
                <DropdownOption col="3" name="Logic Pro" /> 
                <DropdownOption col="3" name="Music Production" /> 
                <DropdownOption col="3" name="GarageBand" /> 
                <DropdownOption col="3" name="ProTools" /> 
                <DropdownOption col="3" name="Cubase" />
            </div>
        </div>
    );
}

export default DropdownMenu;