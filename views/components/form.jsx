var React = require('react');



class Form extends React.Component {
  render() {

    console.log("\nCard component Added")

    // const id = this.props.data.id
    // const name = this.props.data.name
    // const url = this.props.data.image
    // const description = this.props.data.description
    // const date = this.props.data.created

    // const editUrl = "/recipes/"+id+"/edit"
    // const deletetUrl = "/recipes/"+id
    // const actionDelete ="/recipes/" + id + "?_method=DELETE";

    const id = "ID here"
    const name = "NAME HERE"
    const url = "URL HERE"
    const description = "DESCRIPTION HERE"
    const date = "DATE HERE"

    const editUrl = "/recipes/"+id+"/edit"
    const deletetUrl = "/recipes/"+id
    const actionDelete ="/recipes/" + id + "?_method=DELETE";

    let ingredList = this.props.data.ingredient.map(item=>{
        let i = Object.values(item);
        if(i.length === 3){
            return <li className="list-group-item">{i[1]} {i[0]} {i[2]} </li>
        } else{
            return <li className="list-group-item">{i[1]} {i[0]}</li>
        }
    })
    let preplist = this.props.data.step.map(item=>{
        return <li className="list-group-item">{item}</li>
    });

    return (
        <div className="col">
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#picture">Pictures</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#recipe">Recipe</a>
                    </li>

                </ul>
            </div>
            <div id="myTabContent" className="tab-content">
                <div className="card-body tab-pane fade active show" id="picture">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <img className="card-img-top" src={url} alt={name}/>


                </div>
                <div className="card-body tab-pane fade " id="recipe">
                    <h5 className="card-title">{name}</h5>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md">
                                <p className="card-text">Ingredient List</p>
                                <ul className="list-group"></ul>
                            </div>
                            <div className="col-md">
                                <p className="card-text">Preparation</p>
                                <ul className="list-group"></ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <form method="POST" action={actionDelete}>
                            <fieldset>
                            <div className="form-group">
                            <input type="text" className="form-control" name="id" type="hidden" value={id}/>
                            <button type="submit" className="btn btn-outline-danger btn-lg mx-md-4 my-md-4" value="delete this">DELETE</button>
                            </div>
                            </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        );
    }
}

module.exports = Form;