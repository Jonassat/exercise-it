import React from "react";

import styles from "../../App.module.css";

const Settings = props => {
  return (
    <div className={styles.settings}>
      <div onClick={() => props.goHome()}>
        <div className={styles.logo}>Exercise-It!</div>
      </div>
      {/* <div className={styles.filter}>
        <h3><strong>Sorter postene:</strong></h3>
            <br />
            {this.state.musclegroups.map(tag => (
              <div
                onClick={() =>
                  this.state.valgteMuskler.includes(tag)
                    ? this.setState({
                        valgteMuskler: this.state.valgteMuskler.filter(
                          a => a !== tag
                        )
                      })
                    : this.setState(prev => ({
                        valgteMuskler: [...prev.valgteMuskler, tag]
                      }))
                }
                className={
                  this.state.valgteMuskler.includes(tag)
                    ? styles.choosenLink
                    : styles.filterLink
                }
              >
                {tag.name}
              </div>
            ))}
            {!this.state.loading ? (this.state.exercises.map(øvelse => (
              <div
                onClick={() =>
                  this.state.valgteØvelser.includes(øvelse.title)
                    ? this.setState({
                        valgteØvelser: this.state.valgteØvelser.filter(
                          a => a !== øvelse.title
                        )
                      })
                    : this.setState(prev => ({
                        valgteØvelser: [...prev.valgteØvelser, øvelse.title]
                      }))
                }
                className={
                  this.state.valgteØvelser.includes(øvelse.title)
                    ? styles.choosenLink
                    : styles.filterLink
                }
              >
                {øvelse.title}
              </div>
            ))) : ''}
          </div> */}
        <div className={styles.buttonRow}>
        <div onClick={() => {}} className={styles.setting}>
           Skjul øvelser
        </div>
        <div onClick={() => {}} className={styles.setting}>
           Skjul treningsøkter
        </div>
        <div onClick={() => {}} className={styles.setting}>
           Legg til ny øvelse +
        </div>
        <div onClick={() => {}} className={styles.setting}>
           Opprett treningsøkt +
        </div>
        <div onClick={() => {}} className={styles.setting}>
           Informasjon
        </div>
          <div onClick={() => props.login()} className={styles.loginSetting}>
           {props.user.username ? 'Logg ut' : 'Logg inn'}
        </div>
      </div>
      {/* <NewExercise reFetch={() => this.buildFeed()} user={this.props.user} createNew={() => this.props.newExercise()} isCreating={this.props.creatingNewExercise}/>
      <NewWorkout reFetch={() => this.buildFeed()} user={this.props.user} createNew={() => this.props.newWorkout()} isCreating={this.props.creatingNewWorkout}/>
     */}
    </div>
  );
};

export default Settings;