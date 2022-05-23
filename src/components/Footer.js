import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component
{
  render()
  {
    return (
        <div class="jumbotron text-center">
        <div class="container text-center text-md-left mt-5" style="padding-top: 20px;">
    <div class="row">

      <div class="col-md-3 mx-auto mb-4">
        <h6 class="text-uppercase font-weight-bold">A Propos de nous</h6>
        <hr class="bg-warning mb-4 mt-0 d-inline-block mx-auto" style="width: 125px; height: 2px" />
        <p class="mt-2">RentO est le meilleur site web pour louer et mettre en location vos
          objets. Commencez en un seul click !
        </p>
      </div>
  
      <div class="col-md-2 mx-auto mb-4">
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="bg-warning mb-4 mt-0 d-inline-block mx-auto" style="width: 110px; height: 2px"/>
          <ul class="list-unstyled">
            <li class="my-2"><a href="#">Home</a></li>        
            <li class="my-2"><a href="#">Se connecter</a></li>
            <li class="my-2"><a href="#">S'inscrire</a></li>
            <li class="my-2"> <a href="#">Contact</a></li>         
          </ul>
      </div>

      <div class="col-md-3 mx-auto mb-4">
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="bg-warning mb-4 mt-0 d-inline-block mx-auto" style="width: 75px; height: 2px"/>
          <ul class="list-unstyled">
            <li class="my-2"><i class="fas fa-home mr-3"></i>Avenue de la Palestine Mhanech I, Tetouan</li>
            <li class="my-2"><i class="fas fa-envelope mr-3"></i> rento_team@gmail.com</li>
            <li class="my-2"><i class="fas fa-phone mr-3"></i> + 212 534 567 88</li>
          </ul>
      </div>
    </div>
  </div>

  <div class="footer-copyright text-center py-3">
    <p>&copy; Copyright
    <a href="#">RentO Team</a></p>
  </div>

      </div>
    )
  }
}
export default Footer;