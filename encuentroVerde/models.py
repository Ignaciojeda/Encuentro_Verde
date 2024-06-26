from django.db import models

class Formulario(models.Model):
    nombre_cliente  = models.CharField(max_length=20)
    apellido_cliente = models.CharField(max_length=20)
    numero_cliente = models.CharField(max_length=20)
    correo_cliente = models.CharField(max_length=20)
    id_genero          = models.ForeignKey('Genero',on_delete=models.CASCADE, db_column='idgenero')
    ciudad_cliente = models.CharField(max_length=20)

    def __str__(self):
        return str(self.nombre_cliente)


class Genero(models.Model):
    id_genero  = models.AutoField(db_column='idgenero', primary_key=True) 
    genero     = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.genero)
