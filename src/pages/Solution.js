import React, { useState } from "react";
import fireSystemImage from "../assets/gall5.jpg";

const Solution = () => {
  const [expandedIds, setExpandedIds] = useState([]);
  const [openSubSections, setOpenSubSections] = useState({});

  const toggleExpand = (id) => {
    setExpandedIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((itemId) => itemId !== id) : [...prevIds, id]
    );
  };

  const toggleSubSection = (itemId, type) => {
    const key = `${itemId}-${type}`;
    setOpenSubSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = [
    {
      title: "Physical Security",
      type: "grid",
      items: [
        { 
          id: "ac", 
          name: "ACCESS CONTROL", 
          desc: "Controls access to resources or areas from a central location. It integrates access control devices and enforces access policies, authentication, and authorization from a unified platform.",
          image: "https://www.pembrokeshirepc.co.uk/images/2023/knowledgebase/access-control-systems-for-commercial-premises.jpg",
          solutionsList: ["Perimeter Electric Fence System", "Metal Detector Systems", "Central Command Center", "Door Access Control System", "Biometrics and RFID System"],
          productList: ["Motion Sensors", "Contact Sensors", "Detector Test Equipment", "Shock and Vibration Sensors",  "PTZ Cameras", "Bullet Camera", "Dome Camera", "Fish Eye Camera"
            ,"Thermal Camera"],
        },
        { 
          id: "cctv", 
          name: "CCTV", 
          desc: "“CCTV” typically stands for “Closed-Circuit Television,” but it refers to a specific type of technology used for monitoring and recording activity, similar to how CCTV is used in physical security.",
          image: "https://britanniaalarms.co.uk/wp-content/uploads/Rectangle-95.jpg",
          solutionsList: ["CCTV and Surveillance System"],
          productList: ["PTZ Camera", "Bullet Camera", "Dome Camera", "Fish Eye Camera", "Thermal Camera", "Floodlight Camera", "Corner-Mount", "Wedge"]
        },
        { 
          id: "fire", 
          name: "FIRE DETECTION AND ALARM SYSTEM", 
          desc: "Detects and alerts individuals to potential threats or emergencies, typically through sensors and audible or visual devices, providing real-time notifications and monitoring continuously.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfBt5lyvUbNHQyN6X8YLhYd_IM4BiYdtsEdTIEcaZsHPOif3rWIb3cK4&s=10",
          solutionsList: ["Fire Supression System (FM200)", "Fire Detection and Alarm system (FDAS)", 
            "ADS Clean Agent Suppression System", "ECS FM200 & NOVEC1230 Clean Agent Gas Suppression System", "Air Intelligence System", "Inert Gas Suppression System", "Kitchen Suppression System"
          , "CO2 Fire Suppression System"],
          productList: ["Flame Detectors", "Gas Detectors", "Aspirating Smoke Detectors", "Flow Sensors", "Intelligent Detectors"]
        }
      ]
    },
    {
      title: "Information Security",
      type: "wide",
      items: [
        { 
          id: "cyber", 
          name: "CYBER SECURITY", 
          desc: "Protecting computer systems, networks, and data from unauthorized access, damage, or disruption by implementing security measures, monitoring activity, and enforcing strict access policies. It also ensures compliance with industry standards and regulations.",
          image: "https://onesim-production.s3.ap-southeast-1.amazonaws.com/onesim/media/el-news-events-articles-for-businesses/articles%20and%20insights/cybersecurity_and_data_privacy_article_image1.jpg",
          solutionsList: [`Firewall
          (Intrusion Prevention)
          (Traffic Analysis and Monitoring)
          (Bandwidth Management)
          (Application and Server Anti-virus Software)`,
            "Workstation and Server Anti-Virus Software"],
          productList: ["Endpoint", "Firewall", "MDR", "NDR", "Phish Threat"]
        }
      ]
    },
    {
      title: "Wireless Connectivity",
      type: "wide",
      items: [
        { 
          id: "wireless", 
          name: "WIRELESS CONNECTIVITY", 
          desc: "Network or communication link between devices without the use of physical cables or wires (e.g. wi-fi, bluetooth, cellular networks, or satellite connections). These wireless networks allow devices to share data, connect to the internet, and communicate seamlessly over short and long distances.",
          image: "https://www.mcollins.com/wp-content/uploads/2023/09/Wireless-Networks.png",
          solutionsList: ["Outdoor and Indoor Wifi Devices"],
          productList: ["Access Points", "PoE Switch", "Network Controllers", "Fiber"]
        }
      ]
    },
    {
      title: "Communication Devices",
      type: "wide",
      items: [
        { 
          id: "comm-devices", 
          name: "COMMUNICATION DEVICES", 
          desc: "Devices that enable the transmission and reception of information between individuals or systems, such as mobile phones, telephones, routers, and webcams. These devices facilitate seamless communication, support internet connectivity, and allow real-time collaboration across networks and platforms.",
          image: "https://www.comprehensivecom.net/wp-content/uploads/2024/03/emergency-communication-devices-scaled.jpeg",
          solutionsList: ["Analog, Digitalm and Ip PABX (Telephone System)","Analog, Digital, and IP Based 2-way Radio System","Point to point Connectivity",
          "Relay Station"],
          productList: ["Analog Radios", "SSB radios", "HF Radios", "WLAN Radios", "RoIP & Network System", "Satellite PTT"]
        }
      ]
    },
    {
      title: "Industry Specific",
      type: "grid",
      items: [
        { 
          id: "bms", 
          name: "BUILDING MANAGEMENT SYSTEM", 
          desc: "Manages various building systems, including hvac, lighting, security, and energy management, to optimize building performance and overall operational efficiency.",
          image: "https://op-int.com/wp-content/uploads/2025/10/Building-Management-System-Software-2.jpg",
          solutionsList: ["Flexible Learning Adaptation and Digitalization for Education Sector", "Parking management System", "Disaster and Response System for Government Agencies", "LED Light Systems", "Sewage Management System", "Military and Defense Equipment and Systems for Army"],
          productList: ["Field Devices", "Air Filtration & Disinfection", "Controllers", "Lightning", "Networking", "Lightning Control"]
        },
        { 
          id: "solar", 
          name: "SOLAR PANELS", 
          desc: "Electricity generated from sunlight using solar panels or thermal systems, providing renewable energy for homes, businesses, and industries while reducing carbon emissions.",
          image: "https://solarup.ph/wp-content/uploads/2024/06/pexels-cristian-rojas-8853502-scaled.jpg",
          solutionsList: ["Modules", "Commercial", "Residential", "Energy Storage"],
          productList: ["Modules", "Inverters", "Utility"]
        }
      ]
    },
    {
      title: "Technology Backbone (On-Premise)",
      type: "wide",
      items: [
        { 
          id: "structured-cabling", 
          name: "STRUCTURED CABLING", 
          desc: "A standardized and organized approach to designing and installing a network infrastructure within a building or facility. This approach ensures optimal performance, efficient cabling, reliable connectivity, and scalability for future technological upgrades and expansions.",
          image: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1136043163StructuredCablingTechnician.jpg=ws1280x960",
          solutionsList: ["Network Rehabilitation", "Internal and External network cabling", "Network Backbone Optimization", "Hyper Converged Network Cabling", "Network Attached Storage and Backup", "Hyper Converged Network Cabling", "Disaster and Recovery"],
          productList: ["FR Cable", "Wire & Cable", "CATV Solution", "CCTV Solution", "FFTx Solution", "Fiber Optic Solution", "Structured Cabling Solution"]
        }
      ]
    },
    {
      title: "Cloud Computing",
      type: "wide",
      items: [
        { 
          id: "cloud-mgmt", 
          name: "CLOUD MANAGEMENT", 
          desc: "Involves overseeing and controlling the operations, resources, and services within a cloud computing environment, including provisioning, monitoring, security, cost optimization, and automation. It also ensures compliance, reliability, scalability, and efficient management of all cloud-based resources and workflows.",
          image: "https://blog.greencloudvps.com/wp-content/uploads/2022/07/cloud-management-1.jpg",
          solutionsList: ["Microsoft Azure Cloud", "Amazon Web Service (AWS) Cloud", "Alibaba Cloud"],
          productList: ["Elastic Compute Service", "Dedicated Host", "Elastic GPU Service", "Super Computer Cluster (SCC)", "Batch Compute"]
        }
      ]
    }
  ];

  return (

    <div>
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>WHAT DO WE OFFER?</h1>
            <p>Delivering smart, scalable, annd customized IT solution to solve your toughest challenges.</p>
          </div>
        </div>
      </header>
  
    <div className="solutions-container animate-fade" style={containerStyle}>
      <h2 style={headerStyle}>SOLUTION AND PRODUCTS</h2>

      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: '50px' }}>
          <h3 style={categoryTitleStyle}>{cat.title}</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: cat.type === 'grid' ? 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' : '1fr',
            gap: '25px' 
          }}>
            {cat.items.map((item) => (
              <div key={item.id} style={cardStyle}>
                <div className={cat.type === 'wide' ? 'solution-card-row solution-card-row--wide' : 'solution-card-row'}>
                  <div className="card-image" style={{ 
                    width: cat.type === 'wide' ? 'min(400px, 100%)' : '100%',
                    height: '220px', 
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px'
                  }} />
                  
                  <div style={{ padding: '20px', flex: 1 }}>
                    <h4 style={itemTitleStyle}>{item.name}</h4>
                    <p style={descTextStyle}>{item.desc}</p>
                    <button onClick={() => toggleExpand(item.id)} style={btnStyle}>
                      {expandedIds.includes(item.id) ? "CLOSE" : "VIEW"}
                    </button>
                  </div>
                </div>

                {expandedIds.includes(item.id) && (
                  <div style={expandSectionStyle}>
                    <hr style={hrStyle} />
                    <h5 style={subHeadingStyle}>Product Overview</h5>
                    <p style={productOverviewTextStyle}>{item.productOverview}</p>

                    <div style={listGridStyle}>
                      <div style={listBoxStyle}>
                        <div 
                          style={{...listHeaderStyle, cursor: 'pointer'}} 
                          onClick={() => toggleSubSection(item.id, 'solutions')}
                        >
                          <span>SOLUTIONS</span>
                          <span style={{
                            transform: openSubSections[`${item.id}-solutions`] ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s'
                          }}>▲</span>
                        </div>
                        {openSubSections[`${item.id}-solutions`] && (
                          <ul style={ulStyle}>
                            {item.solutionsList.map((sol, i) => (
                              <li key={i} style={liStyle}>{sol}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div style={listBoxStyle}>
                        <div 
                          style={{...listHeaderStyle, cursor: 'pointer'}} 
                          onClick={() => toggleSubSection(item.id, 'products')}
                        >
                          <span>LIST OF PRODUCTS</span>
                          <span style={{
                            transform: openSubSections[`${item.id}-products`] ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s'
                          }}>▲</span>
                        </div>
                        {openSubSections[`${item.id}-products`] && (
                          <ul style={ulStyle}>
                            {item.productList.map((prod, i) => (
                              <li key={i} style={liStyle}>{prod}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

const containerStyle = { 
  padding: '40px 8%', 
  marginTop: '10px'
};

const headerStyle = { 
  textAlign: 'center', 
  marginBottom: '40px', 
  fontSize: 'clamp(1.8rem, 7vw, 3rem)',
  fontWeight: '800'
};

const categoryTitleStyle = { 
  fontSize: '2rem', 
  marginBottom: '20px', 
  fontWeight: '700', 
  color: '#333' 
};

const cardStyle = { 
  backgroundColor: '#fff', 
  borderRadius: '20px', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
  overflow: 'hidden', 
  padding: '15px', 
  border: '1px solid #eee', 
  marginBottom: '20px' 
};

const itemTitleStyle = { 
  fontSize: '1.1rem', 
  fontWeight: '800', 
  marginBottom: '10px' 
};

const descTextStyle = { 
  color: '#666', 
  fontSize: '0.9rem', 
  lineHeight: '1.5', 
  marginBottom: '20px' 
};

const btnStyle = { 
  backgroundColor: '#4988C4', 
  color: 'white', 
  border: 'none', 
  padding: '10px 30px', 
  borderRadius: '8px', 
  fontWeight: 'bold', 
  cursor: 'pointer', 
  fontSize: '0.85rem' 
};

const expandSectionStyle = { 
  padding: '0 20px 20px' 
};

const hrStyle = { 
  border: '0', 
  borderTop: '1px solid #eee', 
  margin: '20px 0' 
};

const subHeadingStyle = { 
  marginBottom: '10px', 
  fontWeight: 'bold', 
  fontSize: '0.95rem' 
};

const productOverviewTextStyle = { 
  fontSize: '0.9rem', 
  color: '#444', 
  lineHeight: '1.6', 
  marginBottom: '20px' 
};
const listGridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
  gap: '20px', 
  marginTop: '20px', 
  alignItems: 'flex-start' 
};

const listBoxStyle = { 
  backgroundColor: '#fff', 
  borderRadius: '4px', 
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
  overflow: 'hidden', 
  border: '1px solid #eee' 
};

const listHeaderStyle = { 
  backgroundColor: '#0F2854', 
  color: 'white', 
  padding: '12px 15px', 
  fontSize: '0.85rem', 
  fontWeight: 'bold', 
  display: 'flex', 
  justifyContent: 'space-between' 
};

const ulStyle = { 
  listStyleType: 'disc', 
  padding: '20px 35px', 
  margin: 0 
};

const liStyle = { 
  fontSize: '0.85rem', 
  marginBottom: '8px', 
  color: '#34495e',
  whiteSpace: 'pre-line'
};

export default Solution;

