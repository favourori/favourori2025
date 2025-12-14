import { GalleryImage, Image, SectionTitle, Works } from "@/components";
import { certifications, contact, impacts, philosophy, technicalDomains, works } from "@/configs";

export default function About() {
  return (
    <>
      <div className="h-84"></div>

      <div className="container-fluid py-5">
        <div className="container px-1 px-lg-0 py-lg-5">
          <div className="row justify-content-center pt-lg-4">
            <div className="col-lg-10">
              <div className="row g-4 gx-lg-5 justify-content-between align-items-center">
                <div className="col">
                  <img src="/assets/img/avatar.jpg" alt="avatar" className="img-fluid rounded-4" />
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 regular mb-lg-4">Building the next generation of security automation.</h1>
                  <p className="mb-lg-4">I'm a Security Engineer focused on building the next generation of security automation and application protection. My career spans DevSecOps, vulnerability management, SDLC security, threat modeling, and cloud-native security architectures.</p>
                  <p className="mb-lg-4">I have led security operations across highly regulated organizations, integrating advanced security tooling, building internal platforms, and driving measurable improvements in risk posture. I also architect and develop my own security products, such as ThreatLens, an AI-powered threat modeling tool, and PilotPatch, a vulnerability prioritization and remediation dashboard. These tools are designed to simplify complexity, eliminate noise, and surface the security signals that matter.
                  </p>
                  <p className="text-dark fw-medium regular mb-4">My mission: Transform enterprise security from reactive chaos into proactive intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top py-5">
        <div className="container px-1 px-lg-0 py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 justify-content-between">
                <div className="col-12">
                  <span className="d-block smaller text-muted text-uppercase mb-2">Expertise</span>
                </div>
                <div className="col-lg-5">
                  <h3 className="regular mb-4">Technical Domains</h3>
                  <div className="list-group">
                    {technicalDomains.map((t, i) => (
                      <div key={i} className="list-group-item d-flex align-items-center gap-2 bg-transparent border-0 px-0 text-muted">
                        <div className="dot me-1"></div>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5">
                  <h3 className="regular mb-4">Certifications</h3>
                  <div className="list-group">
                    {certifications.map((c, i) => (
                      <div key={i} className="list-group-item bg-transparent border-0 px-0 text-muted">
                        <h5 className="text-dark">{c.title}</h5>
                        <small>{c.description}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top py-5" style={{
        backgroundColor: "#f3f4f64d"
      }}>
        <div className="container px-1 px-lg-0 py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 justify-content-between">
                <div className="col-12">
                  <span className="d-block smaller text-muted text-uppercase">Philosophy</span>
                </div>
                <div className="col-12">
                  <h1 className="regular">Security must be:</h1>
                </div>
                {philosophy.map((p, i) => (
                  <div key={i} className="col-lg-3">
                    <h5 className="text-dark regular">{p.title}</h5>
                    <small>{p.description}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top py-5  d-none">
        <div className="container px-1 px-lg-0 py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 justify-content-between">
                <div className="col-12">
                  <span className="d-block smaller text-muted text-uppercase mb-2">Impact</span>
                </div>
                <div className="col">
                  <h1 className="display-5 regular mb-lg-4">I help organizations...</h1>
                </div>
                <div className="col-lg-6">
                  <div className="list-group">
                    {impacts.map((im, i) => (
                      <div key={i} className="list-group-item d-flex align-items-center gap-2 bg-transparent border-0 px-0 text-muted">
                        <div className="dot me-1"></div>
                        <span>{im}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 py-5 d-none">
              <hr className="my-0" />
            </div>
            <div className="col-lg-10 d-none">
              <h2 className="regular mb-0">Security should accelerate innovation, <span className="text-muted">not limit it.</span></h2>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid border-top">
        <div className="container px-1 px-lg-0 py-lg-5">
          <div className="row gy-5">
            <div className="col-12 py-lg-3 d-none d-lg-block"></div>
            <div className="col-auto ms-auto">
              <h1 className="display-3 regular">Conferences & Engagements</h1>
            </div>
            <div className="col-12">
              {works.map((w, i) => (
                <Works key={i} {...w} />
              ))}
            </div>
            <div className="col-12 py-lg-3 d-none d-lg-block"></div>
            <div className="col-12">
              <GalleryImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
