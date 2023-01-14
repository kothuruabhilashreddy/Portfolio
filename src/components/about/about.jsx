import React from 'react';
import './about.css';
import * as projectsList from '../../assets/data/projects.json';

function generateProjectsBlock(projects){
    console.log(projects);
    let invert = false;
    let results = [];
    projects.forEach(project => {
        if(invert){
            results.push(<li class="timeline" key={project.title.replace(" ","-")}>
                <div class="timeline-image"><img class="rounded-circle img-fluidi" src={process.env.PUBLIC_URL + project.image} alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>{project.title}</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">{project.text}</p></div>
                </div>
            </li>);
        }
        else{
            results.push(
                <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluidi" src={process.env.PUBLIC_URL + project.image} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>{project.title}</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">{project.text}</p></div>
                        </div>
                    </li>
            );
        }
        invert = ! invert;
    })
    return (<ul class="timeline">{ results }</ul>);
}

const about = () => {
    var myProjects = projectsList.default;
  return (
    <section class="page-section" id="about">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>About me</h2>
                        <p class="lead">I was born and raised in Hyderabad, India. I'm a Software Engineering and I love to contribute and make an impact on code. My everyday activities included going to work, reading books and playing games. My technical interests: Pega PRPC, Full Stack and Computer Vision</p>
                        <div class="container px-4">
                            {generateProjectsBlock(myProjects)}
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default about