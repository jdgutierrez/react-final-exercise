import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ContactForm from './contactForm';
import ContactList from './contactList';
import ContactDetails from './contactDetails';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <div><Link to="/inicio">Inicio</Link></div>
          <div><Link to="/acerca">Acerca de</Link></div>
          <div><Link to="/contactos/nuevo">Contacto</Link></div>
          <div><Link to="/contactos">Listado de Solicitudes</Link></div>
        </nav>
        <Switch>
          <Route exact path={["/inicio", "/"]}>
            <div className="content">
              Bienvenido a la aplicación de contactos
            </div>
          </Route>
          <Route path="/acerca">
          <div className="content about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel felis laoreet, dictum tortor ut, blandit turpis. Morbi ligula lectus, porttitor a lobortis non, ullamcorper eget ipsum. Fusce eleifend lacus et aliquam rhoncus. Aliquam sodales nisi lectus, et faucibus nulla luctus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent quis lacus nibh. Quisque non justo dignissim, maximus erat a, pharetra odio.

              In consequat posuere neque a gravida. Proin nec commodo eros, non placerat tortor. Quisque euismod tempor risus quis posuere. Vivamus ornare mauris at justo bibendum, eget egestas ligula luctus. Nulla quis semper eros, vitae consequat nunc. Pellentesque non imperdiet neque. Praesent id turpis turpis. Etiam viverra orci a nisi faucibus, vitae accumsan velit euismod. Donec eu imperdiet purus. Vestibulum et diam ac magna pellentesque maximus ac ac ligula. Fusce bibendum cursus risus quis posuere. Maecenas consectetur nibh lacus, vel bibendum ligula interdum id. Sed bibendum augue eu pharetra pellentesque. Suspendisse potenti.

              Phasellus molestie urna quis ex suscipit iaculis. Phasellus volutpat euismod nisi, non tempor mauris pretium sed. Integer consequat at augue vitae ultricies. Morbi sollicitudin nulla vitae aliquam volutpat. Nam sed feugiat risus. Aliquam fermentum tincidunt tellus, eu vehicula diam egestas vitae. Vivamus consequat eget nibh eget molestie. Aenean vitae tellus ut magna condimentum commodo.

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean gravida odio erat, eget pellentesque tellus laoreet ac. Cras porta nec nisl posuere posuere. Praesent diam eros, imperdiet vulputate accumsan vitae, gravida quis magna. Donec cursus accumsan vulputate. Donec pellentesque augue non dui porttitor, at pellentesque dui interdum. Donec nec fermentum mi. Fusce mollis, massa et elementum feugiat, augue eros gravida magna, id egestas felis nisl sit amet justo. Fusce sed scelerisque ante, sed mollis justo. Nulla non dignissim velit, et elementum metus. Cras vitae pharetra nunc. Quisque auctor malesuada eros, in aliquet orci blandit in. Etiam sollicitudin condimentum nisi et eleifend. Aenean neque justo, commodo ut augue et, gravida ultricies metus. Ut elementum et urna et molestie. Donec vehicula neque sit amet turpis mollis eleifend.
            </div>
          </Route>
          <Route path="/contactos/nuevo">
            <ContactForm />
          </Route>
          <Route path="/contactos/:contactId">
            <ContactDetails />
          </Route>
          <Route path="/contactos">
            <ContactList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
