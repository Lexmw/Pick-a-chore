import React from "react";

const EditView = (props) => {
  return (
    <div className="col-md-8">
      <div className="panel">
        <div className="panel-body text-left">
          <h4 className="card-text">Edit</h4>
          <textarea
            className='update-todo-text'
            name="editDescription"
            value={props.editDescription}
            onChange={props.handleChange}
          />
        </div>
        <div className="panel-footer center-block">
          <div className="text-right">
            <button
              className="btn btn-success update-todo"
              type="button"
              onClick={() =>
                props.handleSave(
                  props.editDescription,
                  props.id
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditView;
