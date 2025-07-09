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
            {/* Hero Header with Logo and Company Name */}
            <div className="hero-header">
              <div className="hero-logo">
                <img 
                  src="/images/logo1.png" 
                  alt="Allegra Arthritis Associates Logo"
                  className="company-logo"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <h1 className="company-name">Allegra Arthritis Associates</h1>
            </div>
            
            <div className="hero-content">
              <div className="hero-text">
                <h2>Premier Rheumatology Care in Central New Jersey</h2>
                <p>Allegra Arthritis Associates provides comprehensive, evidence-based treatment for arthritis, autoimmune disorders, and musculoskeletal conditions. Our board-certified specialists deliver personalized care with advanced diagnostic capabilities and cutting-edge therapies across multiple convenient locations in Central Jersey.</p>
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
                    alt="Professional rheumatology care for arthritis and joint conditions"
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
                    <span>Expert Rheumatology Care</span>
                    <p>Central New Jersey's Leading Practice</p>
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
              {/* Doctors Row */}
              <div className="doctors-row">
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
                    <h3>Edward Allegra, MD, FACR</h3>
                    <p className="title">Rheumatologist</p>
                    <p className="credentials">MD, Board Certified Rheumatologist, Fellow of American College of Rheumatology</p>
                    <p className="specialty">Dr. Allegra is a board-certified rheumatologist with over 25 years of experience in outpatient treatment and diagnosis of adult rheumatologic diseases and a fellow from American College of Rheumatology. He has been in private practice since 1996 when he established Allegra Arthritis Associates. Dr. Allegra is a consultant Rheumatologist with Hackensack Health Review Medical Center and Bayshore Medical Center in Central New Jersey. Dr. Allegra's expertise includes the use of musculoskeletal ultrasound for diagnosis and procedure guidance in the management of rheumatologic diseases. Dr. Allegra is commited to providing patients with the highest quality of care and resources for optimal disease management..
                    Dr. Allegra treats patients in Red Bank, Keyport and Hazlet. </p>
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
                    <h3>Richard Haddad, MD, FACR</h3>
                    <p className="title">Rheumatologist</p>
                    <p className="credentials">MD, Board Certified Rheumatologist, Fellow of American College of Rheumatology</p>
                    <p className="specialty">Dr. Haddad is a board-certified rheumatologist and a fellow from the American College of Rheumatology. Dr. Haddad completed his rheumatology fellowship training at Cooper Medical Center, Robert Wood Johnson School of Medicine, N.J. Dr. Haddad's expertise inlcudes the use of musculoskeletal ultrasound for diagnosis and procedure guidance in the management of rheumatoid arthritis, psoriatic arthritis, osteoarthritis, gout, pseudogout and various other musculoskeletal disorders. He enjoys teaching and has been awarded an Affiliate Clinical Faculty at Monmouth University. In regards to patient care, he shares a similar philosophy as William Osler, "The good physician treats the disease." 
                    Dr. Haddad treats patients in Keyport and Red Bank.</p>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="team-member">
                  <div className="member-photo">
                    <img 
                      src="/images/Amanda_Scott.png"
                      alt="Dr. Amanda Scott - Rheumatologist"
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
                      <span>Dr. Amanda Scott</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3>Amanda Scott, MD</h3>
                    <p className="title">Rheumatologist</p>
                    <p className="credentials">MD, Board Certified Rheumatologist</p>
                    <p className="specialty">Dr. Amanda Scott obtained her medical degree from St. George's University, Grenada. She then went on to complete her internal medicine residency at Overlook Medical Center in Summit, NJ. Following this, she finished her rheumatology fellowship at Tufts Medical Center in Boston, MA. Before joining Allegra Arthritis Associates, Dr. Scott accumulated over a decade of experience in arthritis and rheumatology. Her warm personality and empathetic demeanor allow her to provide excellent care to all of her patients. She enjoys treating a wide array of rheumatologic conditions, with an emphasis on improved functionality. In her free time, she loves spending time outdoors and at the beach with her husband and children.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Staff Row */}
              <div className="support-staff-row">
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
                    <h3>Mia Collucci, PA-C</h3>
                    <p className="title">Physician Assistant</p>
                    <p className="credentials">Board Certified Physician Assistant, BS & MS from Monmouth University</p>
                    <p className="specialty">Mia is a board-certified physician assistant specializing in the field of rheumatology. She received her Bachelor's of Science and a Master of Science in Physician Assistant Studies from Monmouth University. In addition, Mia completed over 2,000 hours of clinical training. Mia is a dedicated healthcare professional passionate about patient care and she is committed to making sure that everyone has access to the most advanced and effective treatments for arthritis and rheumatologic conditions.  
Mia treats patients in Red Bank, Hazlet, Keyport and Howell.
                    </p>
                  </div>
                </div>

                {/* Team Member 5 */}
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
                    <h3>Tiffany Matragas, PA-C</h3>
                    <p className="title">Physician Assistant</p>
                    <p className="credentials">Board Certified Physician Assistant, BS from Duquesne University, MS from Saint Francis University</p>
                    <p className="specialty">Tiffany is a board-certified physician assistant who joined Allegra Arthritis Associates and the field of Rheumatology in 2022.  Her extensive experience as a Physician Assistant for the past 15 years encompasses the fields of Vascular Surgery, Thoracic Surgery, Plastic Surgery, Family Medicine and Rheumatology. As a Pittsburgh, PA native, she received her BS in Biology from Duquesne University in Pittsburgh and her Masters in Physician Assistant Sciences from Saint Francis University in Loretto, PA. Tiffany's diverse medical and surgical background make her an excellent asset to the practice.</p>
                  </div>
                </div>

                {/* Team Member 6 */}
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
                    <h3>Justin Badamo, PA-C</h3>
                    <p className="title">Physician Assistant</p>
                    <p className="credentials">Board Certified Physician Assistant, BS & MS from Monmouth University</p>
                    <p className="specialty">Justin is a board-certified physician assistant recognized by the National Commission on Certification of Physician Assistants.  He received both a Bachelor of Science and a Master of Science in Physician Assistant Studies from Monmouth University. Justin is devoted to improving the well being and quality of life of his patients through compassionate and high-quality care.  
                    Justin treats patients in Keyport and Red Bank.</p>
                  </div>
                </div>

                {/* Team Member 7 */}
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
                    <h3>Maria Cogar, NP-C</h3>
                    <p className="title">Nurse Practitioner</p>
                    <p className="credentials">Board Certified Nurse Practitioner, BSN from Seton Hall University, MSN</p>
                    <p className="specialty">Maria is a board-certified nurse practioner specializing in the field of rheumatology. After graduating with a Bachelor of Science in Nursing from Seton Hall University, Maria began her career as a registered nurse in the emergency room, providing care for patients with critical injuries and illnesses and thriving in a face-paced environment. She then transitioned to interventional radiology, where she developed compassion and empathy during vulnerable procedures. While pursuing her Master of Science in Nursing, Maria joined Allegra Arthritis Associates as an infusion nurse, discovering her passion for rheumatology and patient care. Maria treats patients in Keyport, Red Bank and Howell.</p>
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
            </div>

            {/* Patient Resources Section */}
            <div className="patient-resources">
              <h3>Patient Resources</h3>
              <p>Helpful links and resources for arthritis and rheumatology information:</p>
              
              <div className="resources-links">
                <a 
                  href="https://www.arthritis.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H8C7.46957 4 6.96086 4.21071 6.58579 4.58579C6.21071 4.96086 6 5.46957 6 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 13H22L20 21H4L2 13H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Arthritis Foundation
                </a>
                
                <a 
                  href="http://www.ra.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Rheumatoid Arthritis
                </a>
                
                <a 
                  href="http://www.creakyjoints.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Creaky Joints
                </a>
                
                <a 
                  href="http://rheumatology.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  American College of Rheumatology
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Allegra Arthritis Associates P.C. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
