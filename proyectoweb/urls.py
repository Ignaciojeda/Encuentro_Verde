from django.contrib import admin
from django.urls import path, include
from encuentroVerde.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('Contacto/', contacto),
    path('Pumalin/', pumalin),
    path('Puyehue/', puyehue),
    path('VicentePR/', vicentepr),
    path('Reserva/', reserva),
    path('Mis_reservas/',mis_reservas),
    path('', include('encuentroVerde.urls')),
    path('login/', include('django.contrib.auth.urls')), 
]   