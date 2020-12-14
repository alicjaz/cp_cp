import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRequestedBy = this.onChangeRequestedBy.bind(this);
    this.onChangeExaminedBy = this.onChangeExaminedBy.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      requestedBy: "",
      examinedBy: "",
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeRequestedBy(e) {
    this.setState({
      requestedBy: e.target.value
    });
  }

  onChangeExaminedBy(e) {
    this.setState({
      examinedBy: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      examinedBy: this.state.examinedBy,
      requestedBy: this.state.requestedBy
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          requestedBy: response.data.requestedBy,
          examinedBy: response.data.examinedBy,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      requestedBy: "",
      examinedBy: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Przeslales wniosek pomyslnie!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Dodaj
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Tytul</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Opis</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="requestedBy">Zaaplikowany przez</label>
              <input
                type="text"
                className="form-control"
                id="requestedBy"
                required
                value={this.state.requestedBy}
                onChange={this.onChangeRequestedBy}
                name="requestedBy"
              />
            </div>

            <div className="form-group">
              <label htmlFor="examinedBy">Rozpatrzony przez</label>
              <input
                type="text"
                className="form-control"
                id="examinedBy"
                required
                value={this.state.examinedBy}
                onChange={this.onChangeExaminedBy}
                name="examinedBy"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Przeslij
            </button>
          </div>
        )}
      </div>
    );
  }
}
