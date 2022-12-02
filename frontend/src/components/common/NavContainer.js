import React from "react"
import {useHistory} from "react-router-dom"

const NavContainer = ({
  icon,
  title,
  Components
}) => {
  const history = useHistory();

  return (
    <>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        {
          Components.map(
            (component, id) => (
              <li class="nav-item">
                <a 
                  class={`nav-link${id === 0 ? " active" : ""}`} 
                  id="home-tab" 
                  data-toggle="tab"
                  onClick={() => history.push(`#${component.id}`)}
                  href={`#${component.id}`} 
                  role="tab" 
                  aria-controls={component.id} 
                  aria-selected={id === 0 ? "true" : "false"}
                >
                  {component.name}
                </a>
              </li>
            ))
        }
      </ul>

      <div class="tab-content" id="myTabContent">
        {
          Components.map(
            (component, id) => (
              <div class={`tab-pane fade${id === 0 ? " show active" : ""}`} id={component.id} role="tabpanel" aria-labelledby={`${component.id}-tab`}>
                <component.component/>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default NavContainer;
