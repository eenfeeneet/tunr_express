var React = require('react');

class NewForm extends React.Component {
  render() {
    console.log("\nForm component Added")

    return (

        <form action="/recipes" method="POST">
            <fieldset>
                <div className="form-group">
                <label htmlFor="inputDishName">Name</label>
                <input type="text" className="form-control" name="name" id="inputDishName" aria-describedby="nameHelp" placeholder="Name of your dish" required/>
                <small id="nameHelp" className="form-text text-muted">What will you name your dish</small>
                </div>

                <label>Ingredient 01</label>
                <div className="row form-group">

                    <div className="col-md">
                    <input type="text" name="ingredient[0][name]" className="form-control" id="ingName" placeholder="Name" required/>
                    <small className="form-text text-muted">Name of Ingredient</small>
                    </div>
                    <div className="col-md">
                        <input type="number" name="ingredient[0][amount]" min="1" className="form-control" id="ingredientAmnt" placeholder="Amount" required/>
                        <small className="form-text text-muted">Amount needed for the ingredient</small>
                    </div>
                    <div className="col-md">
                    <input type="text" name="ingredient[0][unit]" className="form-control" id="inputDishName" placeholder="Unit"/>
                    <small className="form-text text-muted">Ingredients unit of measurement</small>
                    </div>
                </div>



                <div className="form-group">
                    <label htmlFor="cookingSteps">Simple instructions</label>
                    <textarea name="step" className="form-control" id="cookingSteps" rows="4" placeholder="Keep it simple yeah" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="dishImg">Image Link</label>
                    <input name="image" type="url" pattern="https?://.+" title={"Include http://"} className="form-control" id="dishImg" placeholder="Include http://"/>
                    <small className="form-text text-muted" required>Visual representation of your dish</small>
                </div>

                <div className="form-group">
                    <label htmlFor="dishDescription">Dish Description</label>
                    <input name="description" type="text" maxLength="35" className="form-control" id="dishDescription" placeholder="Describe your dish in one sentence" required/>
                    <small className="form-text text-muted">Short description coz nobody has time for your bullshit Martha.</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>

     );
    }
}

module.exports = NewForm;