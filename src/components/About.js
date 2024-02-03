import React from "react";
import mijin from "../components/image/mijinPhoto.jpg";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="lg:max-w-2xl lg:mx-auto">
          <div className="flex items-center justify-center mb-8">
            <img
              src={mijin}
              alt="Mijin Lee"
              className="rounded-full h-40 w-40 object-cover"
              style={{ width: "400px", height: "500px" }}
            />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-black">
            Hi, I'm Mijin Lee. My educational background is in Teaching, having
            pursued my studies at Queensland University of Technology. The
            allure of the creative possibilities and the inherent
            problem-solving nature of the web development domain has led me to
            take a significant step forward – transitioning into a career as a
            web developer. This decision to shift from teaching to web
            development is deeply rooted in my passion for technology and the
            captivating prospects it offers. While I genuinely enjoyed my time
            in education and cherished the experiences it provided, I find
            myself irresistibly drawn to the dynamic and constantly evolving
            world of web development. There's always been a strong affinity
            within me for technology, which has driven me to proactively engage
            in self-study. Currently, I'm currently pursuing a Graduate
            Certificate program in Information Technology (Web Development) at
            QUT. This journey has been an avenue for continuously expanding my
            knowledge in HTML, CSS, JavaScript, Bootstrap, React, and various
            other programming languages. What truly ignites my enthusiasm is the
            process of crafting functional and visually captivating websites and
            applications. This, coupled with the perpetual learning and the joy
            of problem-solving that web development brings, fills me with a
            sense of accomplishment. The possibilities are boundless, and I'm
            eager to contribute my skills to this exciting and dynamic field.
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-4">Objective:</h3>
            <p className="text-lg leading-relaxed text-black">
              A dedicated professional currently pursuing a Graduate Certificate
              in Information Technology (Web Development), I bring a strong
              foundation in this field, complemented by a Master of Teaching
              (Primary) from QUT and a robust background in Information
              Technology. Seeking a challenging role that leverages my technical
              proficiency, I am eager to apply my expertise to enhance a
              dynamic, technology-focused team. Recognized for delivering
              exceptional technical support, fostering effective collaboration,
              and adeptly adapting to technological advancements.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Education:</h3>
            <ul className="text-lg leading-relaxed text-black">
              <li>
                Graduate Certificate in Information Technology (Web Development)
                - Queensland University of Technology (QUT) | 2023 - 2024
              </li>
              <li>
                Master of Teaching (Primary) - Queensland University of
                Technology (QUT) | 2018 - 2021
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills:</h3>
            <ul className="text-lg leading-relaxed text-black">
              <li>
                Proficient in troubleshooting and resolving technical issues
              </li>
              <li>Excel in collaborating within a team.</li>
              <li>
                Demonstrated ability to organize tasks effectively and
                prioritize workload
              </li>
              <li>
                Effective communicator with exceptional interpersonal skills
              </li>
              <li>Detail-oriented and client-centered</li>
              <li>
                Adaptable and flexible in embracing change and new technologies
              </li>
              <li>
                Strong command of HTML and CSS for building responsive and
                visually appealing web applications
              </li>
              <li>
                Proficient in JavaScript for frontend and backend development
              </li>
              <li>Experienced in using Node.js for server-side development</li>
              <li>Skilled in React for building dynamic user interfaces</li>
              <li>Proficient in MySQL for database management</li>
              <li>
                Demonstrated expertise in utilizing Express to develop robust
                web applications and APIs
              </li>
              <li>
                Knowledgeable in integrating various technologies to develop
                scalable and efficient web solutions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Work Experience:</h3>
            <ul className="text-lg leading-relaxed text-black">
              <li>
                <strong>Educator</strong>
                <br />
                C&K Robinson Road | 2021 - 2024
                <ul>
                  <li>
                    Supported the integration of technology into the learning
                    environment for children
                  </li>
                  <li>
                    Provided technical support to staff members for educational
                    technology tools and platforms enhancing the integration of
                    technology in teaching and learning activities
                  </li>
                  <li>
                    Maintained and managed educational technology resources
                  </li>
                  <li>
                    Contributed to the efficiency of technical support
                    operations by handling related tasks such as data entry,
                    filing, and document preparation
                  </li>
                </ul>
              </li>
              <li>
                <strong>Education Assistant/Teacher Aide</strong>
                <br />
                Aspley East State School | 2022 - 2023
                <ul>
                  <li>
                    Provided technical support to students and teachers in using
                    educational technology tools/platforms
                  </li>
                  <li>
                    Collaborated with teachers to integrate technology into
                    lesson plans and instructional materials
                  </li>
                  <li>
                    Supported individual students or small groups in utilizing
                    technology for learning
                  </li>
                  <li>
                    Assisted in maintaining educational technology resources and
                    troubleshooting technical issues
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preservice Teacher</strong>
                <br />
                Northlake College State School, Nundah State School, Kelvin
                Grove College State School | 2018 - 2021
                <ul>
                  <li>
                    Integrated technology tools into lesson plans and teaching
                    strategies
                  </li>
                  <li>
                    Utilized educational technology to enhance student
                    engagement and learning outcomes
                  </li>
                  <li>
                    Provided technical support to students and teachers for
                    educational technology usage
                  </li>
                  <li>
                    Collaborated with colleagues to create and implement
                    technology-enhanced educational activities
                  </li>
                  <li>
                    Adapted teaching strategies to incorporate technology for
                    improved learning outcomes
                  </li>
                </ul>
              </li>
              <li>
                <strong>Retail Sales Associate</strong>
                <br />
                SES Fashion & Jewelry kiosk at Chermside Shopping Centre | 2015
                -2017
                <ul>
                  <li>
                    Collaborated with the store team ensure exceptional customer
                    service, working towards exceeding customer satisfaction
                    goals
                  </li>
                  <li>
                    Advised customers on product quality, style, and value using
                    product knowledge to enhance their shopping experience and
                    drive sales
                  </li>
                  <li>
                    Addressed customer inquiries and resolved any issues or
                    concerns promptly and effectively, maintaining a high level
                    of professionalism
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">References:</h3>
            <ul className="text-lg leading-relaxed text-black">
              <li>
                Samantha Mcgrath | Previous Director at C&K Robinson Road |
                samians71@gmail.com | 04016744797
              </li>
              <li>
                Sally Donaldson | Group Leader at C&K Robinson Road |
                sally-donaldson@hotmail.com | 0403206034
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
