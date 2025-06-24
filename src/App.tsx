import Navbar from './components/Navbar'
import LocationMap from './components/LocationMap'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Welcome to Allegra Arthritis Associates</h1>
                <p>Comprehensive arthritis care and rheumatology services delivered with expertise, compassion, and cutting-edge treatment options.</p>
                <div className="hero-buttons">
                  <button className="cta-button primary" onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Learn More About Us
                  </button>
                  <button className="cta-button secondary" onClick={() => {
                    const element = document.getElementById('locations');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Find a Location
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-placeholder">
                  <img 
                    src="/images/082017blg_arthritispainhands.jpg" 
                    alt="Modern medical facility with professional healthcare environment"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="fallback-placeholder" style={{ display: 'none' }}>
                    <span>Medical Excellence</span>
                    <p>Professional Healthcare Environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="content-section">
          <div className="container">
            <h2>About Us</h2>
            <p>
            Our mission is to provide excellence in the diagnosis and treatment of musculoskeletal diseases and autoimmune conditions such as rheumatoid arthritis, lupus, osteoarthritis, osteoporosis, gout and other musculoskeletal pain, and care of individuals with these diseases and to treat the total person. 
We offer many on-site services such as our infusion unit and diagnostic musculoskeletal ultrasonography.
 Clinical and administrative representatives are also available
 in our office to support our patients. 
We are committed to providing our patients with the highest quality of care.
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section id="our-team" className="team-section">
          <div className="container">
            <div className="team-header">
              <h2>Our Team</h2>
              <p>Meet our board-certified rheumatologists and healthcare professionals dedicated to providing exceptional care</p>
            </div>
            
            <div className="team-grid">
              {/* Team Member 1 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/dr-edward-c-allegra-iii-md.jpg"
                    alt="Dr. Edward Allegra - Rheumatologist"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Dr. Edward Allegra</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Dr. Edward Allegra</h3>
                  <p className="title">Rheumatologist</p>
                  <p className="credentials">MD, PhD, Board Certified Rheumatologist</p>
                  <p className="specialty">Dr. Allegra is a board-certified rheumatologist with over 25 years of experience in outpatient treatment and diagnosis of adult rheumatologic diseases and a fellow from American College of Rheumatology. He has been in private practice since 1996 when he established Allegra Arthritis Associates. Dr. Allegra is a consultant Rheumatologist with Hackensack Health Review Medical Center and Bayshore Medical Center in Central New Jersey. Dr. Allegra's expertise includes the use of musculoskeletal ultrasound for diagnosis and procedure guidance in the management of rheumatologic diseases. Dr. Allegra is commited to providing patients with the highest quality of care and resources for optimal disease management..
                  Dr. Allegra treats patients in Red Bank, Keyport and Hazlet. </p>
                  <div className="experience">
                    <span className="years">25+ years experience</span>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/haddad.jpg"
                    alt="Dr. Richard Haddad - Rheumatologist"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Dr. Richard Haddad</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Dr. Richard Haddad</h3>
                  <p className="title">Rheumatologist</p>
                  <p className="credentials">MD, Board Certified Rheumatologist</p>
                  <p className="specialty">Dr. Haddad is a board-certified rheumatologist and a fellow from the American College of Rheumatology. Dr. Haddad completed his rheumatology fellowship training at Cooper Medical Center, Robert Wood Johnson School of Medicine, N.J. Dr. Haddad's expertise inlcudes the use of musculoskeletal ultrasound for diagnosis and procedure guidance in the management of rheumatoid arthritis, psoriatic arthritis, osteoarthritis, gout, pseudogout and various other musculoskeletal disorders. He enjoys teaching and has been awarded an Affiliate Clinical Faculty at Monmouth University. In regards to patient care, he shares a similar philosophy as William Osler, "The good physician treats the disease." 
                  Dr. Haddad treats patients in Keyport and Red Bank.</p>
                  <div className="experience">
                    <span className="years">12+ years experience</span>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/badamo.jpg"
                    alt="Justin Badamo - PA-C"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Justin Badamo</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Justin Badamo</h3>
                  <p className="title">PA-C</p>
                  <p className="credentials">MD, Pediatric Rheumatology Fellowship</p>
                  <p className="specialty">Justin is a board-certified physician assistant recognized by the National Commission on Certification of Physician Assistants.  He received both a Bachelor of Science and a Master of Science in Physician Assistant Studies from Monmouth University. Justin is devoted to improving the well being and quality of life of his patients through compassionate and high-quality care.  
                  Justin treats patients in Keyport and Red Bank.</p>
                  <div className="experience">
                    <span className="years">8+ years experience</span>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/colucci.jpg"
                    alt="Mia Collucci - PA-C"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Mia Collucci</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Mia Collucci</h3>
                  <p className="title">PA-C</p>
                  <p className="credentials">MD, PhD, Clinical Research Specialist</p>
                  <p className="specialty">Mia is a board-certified physician assistant specializing in the field of rheumatology. She received her Bachelor's of Science and a Master of Science in Physician Assistant Studies from Monmouth University. In addition, Mia completed over 2,000 hours of clinical training. Mia is a dedicated healthcare professional passionate about patient care and she is committed to making sure that everyone has access to the most advanced and effective treatments for arthritis and rheumatologic conditions.  
Mia treats patients in Red Bank, Hazlet, Keyport and Howell.
                  </p>
                  <div className="experience">
                    <span className="years">10+ years experience</span>
                  </div>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/Maria-NP.jpg"
                    alt="Maria Cogar - FNP-BC"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Maria Cogar</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Maria Cogar</h3>
                  <p className="title">FNP-BC</p>
                  <p className="credentials">MD, Board Certified Internal Medicine & Rheumatology</p>
                  <p className="specialty">Maria is a board-certified nurse practioner specializing in the field of rheumatology. After graduating with a Bachelor of Science in Nursing from Seton Hall University, Maria began her career as a registered nurse in the emergency room, providing care for patients with critical injuries and illnesses and thriving in a face-paced environment. She then transitioned to interventional radiology, where she developed compassion and empathy during vulnerable procedures. While pursuing her Master of Science in Nursing, Maria joined Allegra Arthritis Associates as an infusion nurse, discovering her passion for rheumatology and patient care. Maria treats patients in Keyport, Red Bank and Howell..</p>
                  <div className="experience">
                    <span className="years">9+ years experience</span>
                  </div>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src="/images/matragas.jpg"
                    alt="Tiffany Matragas - PA-C"
                    className="member-photo-img"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="photo-placeholder" style={{ display: 'none' }}>
                    <span>Tiffany Matragas</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>Tiffany Matragas</h3>
                  <p className="title">PA-C</p>
                  <p className="credentials">MD, Rheumatology Fellowship</p>
                  <p className="specialty">Tiffany is a board-certified physician assistant who joined Allegra Arthritis Associates and the field of Rheumatology in 2022.  Her extensive experience as a Physician Assistant for the past 15 years encompasses the fields of Vascular Surgery, Thoracic Surgery, Plastic Surgery, Family Medicine and Rheumatology. As a Pittsburgh, PA native, she received her BS in Biology from Duquesne University in Pittsburgh and her Masters in Physician Assistant Sciences from Saint Francis University in Loretto, PA. Tiffany's diverse medical and surgical background make her an excellent asset to the practice.  
                  Tiffany treats patients in Keyport and Red Bank.</p>
                  <div className="experience">
                    <span className="years">6+ years experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-footer">
              <p>Our team is committed to staying at the forefront of rheumatology through continuing education, research, and evidence-based practice.</p>
            </div>
      </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="locations-section">
          <div className="container">
            <div className="locations-header">
              <h2>Our Locations</h2>
              <p>
                We have four convenient locations throughout Central New Jersey to serve you better. 
                Each office is equipped with state-of-the-art facilities and staffed by our experienced team.
        </p>
      </div>
            <LocationMap />
          </div>
        </section>

        {/* Patient Forms & Resources Section */}
        <section id="patient-forms" className="content-section alt-bg">
          <div className="container">
            <h2>Patient Forms & Resources</h2>
            <p>
              Access important patient forms, educational resources, and helpful information 
              to prepare for your visit and manage your condition.
            </p>
            
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="10,9 9,9 8,9" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>New Patient Paperwork</h3>
                <p>Download and complete our comprehensive new patient forms before your first visit to save time during check-in.</p>
                <a 
                  href="/forms/2024-new-patient-paperwork.pdf" 
                  download="2024-new-patient-paperwork.pdf"
                  className="download-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="resource-card">
                <div className="resource-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Patient Portal</h3>
                <p>Access your medical records, test results, appointment scheduling, and communicate with your healthcare team.</p>
                <button 
                  className="portal-btn"
                  onClick={() => window.open('https://portal.eyereachpatients.com/Patients/allegraarthritisassociates/Account/LogOn?ReturnUrl=%2fPatients%2fallegraarthritisassociates', '_blank')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="8,12 12,16 16,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="16" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Access Portal
                </button>
              </div>

              <div className="resource-card">
                <div className="resource-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C15.0291 21 10.2041 19.1571 6.46447 15.8284C3.68482 13.3481 2 9.54432 2 5.5C2 4.96957 2.21071 4.46086 2.58579 4.08579C2.96086 3.71071 3.46957 3.5 4 3.5H6.18C6.43013 3.49522 6.67086 3.58657 6.85325 3.75942C7.03564 3.93227 7.14146 4.17216 7.15 4.42L7.7 8.09C7.74454 8.33024 7.70292 8.57964 7.58394 8.79329C7.46496 9.00693 7.27524 9.17251 7.05 9.26L5.26 9.91C6.38 12.977 8.523 15.12 11.59 16.24L12.24 14.45C12.3275 14.2248 12.4931 14.035 12.7067 13.9161C12.9204 13.7971 13.1698 13.7555 13.41 13.8L17.08 14.35C17.3278 14.3585 17.5677 14.4644 17.7406 14.6467C17.9134 14.8291 18.0048 15.0699 18 15.32V16.92Z" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Contact Information</h3>
                <p>Find phone numbers, addresses, and office hours for all our locations to schedule appointments or ask questions.</p>
                <button 
                  className="contact-btn"
                  onClick={() => {
                    const element = document.getElementById('locations');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Locations
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
