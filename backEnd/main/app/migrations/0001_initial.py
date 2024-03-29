# Generated by Django 4.2.2 on 2023-07-11 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_img', models.ImageField(upload_to='prod')),
                ('product_name', models.CharField(max_length=30)),
                ('product_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('product_description', models.CharField(max_length=30)),
            ],
        ),
    ]
