<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemandeCongesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demande_conges', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->dateTime("dateDemande");
            $table->dateTime("dateValidation");
            $table->date("dateDebut");
            $table->date("dateFin");
            $table->string("statut",20);
            $table->string("motif",20);
            $table->string("feedback_msg",255);
            $table->string("traiteePar",40);
            $table->bigInteger('type_conge_id')->unsigned();
            $table->foreign('type_conge_id')->references('id')->on('type_conges')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demande_conges');
    }
}
