import React, {Component} from 'react';
import BarSection from './BarSection'
import YearsVsGatherings from './YearsGatherings';
import Header from './Header';
import discoveryData from './data/discovery.json';
import yearsData from './data/yearsTricking.json';
import trainingData from './data/trainingHours.json';
import allData from './data/trickingsurveyresults.json';

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <Header title={'Experience'} subheading={'How did trickers discover tricking? How long have they been tricking? How often? Gatherings?!'}
          icons={["calendar", "wheel", "kick"]}
        />
        <div className="section">
          <div className="content">
              In the survey, several questions were asked related to tricker's
              experience in the community such as <i>"How did you discover tricking?"</i>, 
              <i>"How many years have you been tricking?"</i>, <i>"How many hours a week do you train?"</i>, 
              and <i>"How many gatherings have you attended?"</i>
          </div>
          <div className="content" style={{"marginTop": "0"}}>
            <BarSection data={discoveryData} class="Discovery" description="How did Trickers discover tricking?" 
            xlabel="Means of Discovery" ylabel="Number of Trickers">
              <div className="section" style={{'marginBottom': '1.5rem'}}> 
                <p><span className="highlight">The Internet, Martial Arts, and Parkour</span> make up the three most common ways of discovering tricking. 
                  This comes as no surprise since without Martial Arts, tricking would not exist and without the
                  Internet it would not expanded outside of the martial arts community. As for parkour, it would make sense as
                  the sports are commonly intertwined with eachother. 
                </p>
              </div>
            </BarSection>
            <BarSection data={yearsData} class="Years" description="How long have they been tricking?"
              xlabel="Years Tricking" ylabel="Number of Trickers"
            />
            <YearsVsGatherings data={allData} class="Years-Gatherings"/>
            <BarSection data={trainingData} class="Training" description="How many hours a week do they train?"
              xlabel="Hours per Week" ylabel="Number of Trickers"
            />
            
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default Experience;
