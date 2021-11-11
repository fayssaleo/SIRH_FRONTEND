<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemandeDocAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demande_doc_admins', function (Blueprint $table) {
            $table->increments("id");
            $table->dateTime("dateDemande");
            $table->dateTime("dateValidation");
            $table->string("statut",20);
            $table->string("traiteePar",40);
            $table->bigInteger('collaborateur_id')->unsigned();
            $table->foreign('collaborateur_id')->references('id')->on('collaborateurs')
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
        Schema::dropIfExists('demande_doc_admins');
    }
}
