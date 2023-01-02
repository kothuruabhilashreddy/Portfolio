import React from 'react';
import './about.css';
import ME from '../../assets/img/about/2.png'

import * as projectsList from '../../assets/data/projects.json' ;

function generateProjectsBlock(projects){
    console.log(projects);
    let invert = false;
    let results = [];
    projects.forEach(project => {
        if(invert){
            results.push(<li class="timeline" key={project.title.replace(" ","-")}>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src={ME} alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>{project.title}</h4>
                        <h4 class="subheading">{project.title}</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">{project.text}</p></div>
                </div>
            </li>);
        }
        else{
            results.push(
                <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ME} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>{project.title}</h4>
                                <h4 class="subheading">{project.title}</h4>
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
                        <h2>About this page</h2>
                        <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
                        <div class="container px-4">
                            {generateProjectsBlock(myProjects)}
                        </div>
                    </div>
                </div>
            </div>

            <section class="page-section" id="about">
            
        </section>
        </section>
  )
}

export default about