from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.index, name='Index'),
    path('login/', auth_views.LoginView.as_view(), name='login'),  # Vista de inicio de sesión
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),  # Vista de cierre de sesión
    path('mis_reservas/', views.mis_reservas, name='mis_reservas'),  # Usa minúsculas para la función y el nombre de la ruta
    path('contacto/', views.contacto, name='Contacto'),
    path('pumalin/', views.pumalin, name='Pumalin'),
    path('puyehue/', views.puyehue, name='Puyehue'),
    path('vicentepr/', views.vicentepr, name='VicentePR'),
    path('reserva/', views.reserva, name='Reserva'),
]

