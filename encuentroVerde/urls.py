from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.index, name='Index'),
    path('login/', views.login, name='login'),
    path('Mis_reservas/', views.Mis_reservas, name='Mis_reservas'),
    path('contacto/', views.contacto, name='Contacto'),
    path('pumalin/', views.pumalin, name='Pumalin'),
    path('puyehue/', views.puyehue, name='Puyehue'),
    path('vicentepr/', views.vicentepr, name='VicentePR'),
    path('reserva/', views.reserva, name='Reserva'),
    path('Login/', auth_views.LoginView.as_view(), name='login'),  # Use built-in login view
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),  # Add logout view
]