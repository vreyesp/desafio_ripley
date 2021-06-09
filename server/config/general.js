const user = encodeURIComponent('solnet1');

module.exports = {
    local: true,
    nombreMuni: 'Los Andes',
    port: 4000,
    jwtSecretKey: 'secretKey',

    imgUrl: 'https://www.generico.smartdideco.cl/assets/img/smart_dideco_logo.png',
    //MONGO////
    mongoUrl: 'midx.solnet.cl:27017/gespro-solnet',
    mongoUser: 'solnet1',
    mongoP: 'Xa6KKVenmUx4W2fwcKh6GN75',
    mongoAuthSource: 'admin',

    ////FM////
    fmUser: 'WEB',
    fmP: 'Solnet2018',
    //fmHost: 'https://winsrv03.solnet.cl', //fmHost: 'https://winsrv01.solnet.cl',
    fmHost: 'https://flosandes.solnet.cl', //fmHost: 'https://winsrv01.solnet.cl',
    fmDB: 'LANDES TESTDIDECO', //Base test dideco Generico

    uploadfmUser: 'WEBSMARTDIDECO',
    uploadmP: 'WebSolnet2018',
    uploadfmHost: 'https://winsrv06.solnet.cl',
    uploadfmDB: 'SMARTDIDECO ',

    // smtpHost: 'mail.filedom.cl',
    // smtpPort: 465,
    // smtpUser: 'mensajeria@filedom.cl',
    // smtpP: 'meensaajeeriiaa',

    // smtpHost: 'mail.solnet.cl',
    // smtpPort: 465,
    // smtpUser: 'soporte@solnet.cl',
    // smtpP: 'sop2011',


    // ////mailoptions////
    // mailFrom: 'soporte@solnet.cl',
    // mailCc: 'soporte@solnet.cl',

    ///smtp////
    smtpHost: 'mail.smartdideco.cl',
    smtpPort: 465,
    smtpUser: 'no-reply@smartdideco.cl',
    smtpP: 'testapp2020',


    ////mailoptions////
    mailFrom: 'soporte@solnet.cl',
    mailCc: 'soporte@solnet.cl',

    /** Dropbox **/
    dbxToken: '0BkRBxpMH4AAAAAAAAAAHzdIwQ2GpnVNGUmvgIaxEBQg7fIittbYPjg4o-U36iLh', //cuenta webdeveloper
    dbxFolder: '/didecogenerico',
    uploadFilesUrl: 'https://',
    general: true,
    //activationUrl: 'http://localhost:4200/#/activate', //prueba local
    activationUrl: 'https://www.losandes.smartdideco.cl/#/activate', //deploy
    //urlForgotPass: 'http://localhost:4200/#/', prueba local
    urlForgotPass: 'https://www.losandes.smartdideco.cl/#/', //deploy

    correo: "soporte@municipalidad.cl",
    //nombre de campos FM

    camposFM: {

        id_vecino: "_ID_Solic",
        rut: "_RUT",
        dv: "Sol_DV",
        nombres: "Sol_Nombres",
        apellido_pat: "Sol_Apellidos_Pat",
        apellido_mat: "Sol_Apellidos_Mat",
        celular: "Sol_Tel_Cel",
        mail: "Sol_Email",
        direccion: "Sol_Nom_Calle_Nvo",
        direccion_num: "Sol_Num_Calle_Nvo",
        comuna: "Com_Nombre",
        sexo: "Sol_Sexo",
        direccion_complemento: "Sol_Direc_Complemento",
        direccion_completa: "Sol_Direc_Completa",
        patente: "Sol_num_Patente",
        profesion: "Sol_Profesion",
        registro: "Sol_Registro",
        categoria: "Sol_Categoria",
        patente_pro: "Sol_Patente_Profesional",
        password: "Sol_ClaveWeb",
        estado: "Sol_Estado",
        estado_app: "Sol_web_tokenEstado",
        notificado: "Notificado",
        f_nac: "Sol_FechaNac",
        estadocivil: "_ID_Edo_Civil",
        nacionalidad: "Sol_Nacionalidad",
        escolaridad: "Sol_Escolaridad",
        institucion: "Sol_Est_Institucion",
    },
    tablasFM: {
        empresa_rut: "_Emp_RUT",
        empresa_user: "Empresas_Contacto::ECo_Cuenta_web",
        empresa_rut_dv: "Empresas::Emp_DV",
        empresa_activo: "Empresas::Emp_Activo",
        empresa_pw: "Empresas_Contacto::ECo_pass_web",

        empresa_razonSocial: "",
        empresa_direccion: "",
        empresa_contacto: "Emp_Contacto_principal",
        empresa_mail: "Emp_Email",
        empresa_telefono: "Emp_Telefonos",
        empresa_celular: "Emp_Telefonos_Celular",

        //seguimiento comentarios

        seg_comts_idOferta: '_ID_Oferta',
        seg_comts_idPostulacion: '_ID_Post',
        seg_comts_Detalle: 'SP_Detalle',
        seg_cmts_fecha:'SP_Fecha',//'Seguimiento_Postulaciones::SP_Fecha',
        seg_cmts_usercrea:'zz_creacion_usuario',




        postulaciones: "WEB_OMIL_Postulantes",
        empresa: "WEB_OMIL_EMPRESAS",
        oferta_laboral: 'WEB_OMIL_Oferta_Laboral',
        documentos: "WEB_Doc_Postulantes",
        comentarios:"WEB_Seguimiento_Postulaciones",

        solicitante: "WEB_Solicitantes", //0_WEB_Solicitantes        
        beneficios: 'WEB_Beneficios_Sociales',
        requerimientos: "WEB_Requerimientos",
        //consultas: "WEB_Motivos_Consultas",
        motivosConsulta: "WEB_Motivos_Consultas",
        motivosAgenda: 'WEB_Motivos',
        agenda_funcionario: "WEB_Func_Item_Agenda",
        reserva_hora: "WEB_Reserva_Hora_Profesional",
        departamentos: "WEB_Departamentos",
        profesionales: "WEB_Funcionarios",
    },
    camposConsultas: {
        id_motivo: "_ID_Motivo",
        nombre: "PMot_Nombre",
        f_creacion: "zz_Creacion_Fecha",
        f_creaUser: "zz_Creacion_Usuario",
        f_mod: "zz_Modif_Fecha",
        f_modUser: "zz_Modif_Usuario",
    },
    camposReq: {
        id_req: "_Req_id",
        id_motivo: "_Req_id_motivo",
        id_solicitante: "_Req_id_solicitante", //Solicitantes 54::_Req_id_solicitante
        nombre_motivo: "PMot_Nombre",//Param_Motivos_Consultas::PMot_Nombre
        solicitante_nombrecompleto: "Sol_Nombre_Completo",
        req_descripcion: "_Req_descripcion",
        req_estado: "_Req_Estado",
        req_estado_descripcion: "_Req_Estado_descripcion",
        mostrar_web: "_Req_Resp_MostrarWeb",
        respuesta: "_Req_Descripcion_Respuesta"
    },
    camposMotivos: {

        id_motivo: "_ID_Motivo",
        depto: "_Inic_Dpto",
        nombre_motivo: "PMot_Nombre",
        mostrar: "PMot_Mostrar_Web",
        ini_dep: "_Inic_Dpto",

    },
    camposMotivosConsulta: {
        mostrar_web: "PMot_MostrarWeb"
    },
    camposBeneficios: {

        id: "_ID_Beneficio",
        depto: "_Inic_Dpto",
        nombre: "Ben_Nombre",
        mostrar_web: "Ben_Mostrar_web",
        descripcion: "Ben_Descripcion",
        estado: "Ben_Estado",
    },

    camposReserva: {
        id: "_ID_Reserva",
        id_solic: "_ID_Sol",
        // ini_funcionario: "_RHo_Rut_Profesional",
        ini_funcionario: "_Inic_Prof",
        // ini_dep: "_RHo_Cod_CIDES",
        ini_dep: "_Inic_Depto",
        // fecha: "_RHo_Reserva_Fecha",
        fecha: "HRes_Fecha",
        // hora: "RHo_Reserva_Hora",
        hora: "HRes_Hora",
        // id_motivo: "_RHo_Cod_Motivo",
        id_motivo: "_ID_Motivo",
        // origen: "RHo_Reserva_Tipo",
        origen: "HRes_Tipo",

        // tipo: "HRes_Tipo_reserva"
        tipo: "HRes_Tipo_reserva"

    },
    camposDepartamentos: {
        ini_dep: "_Inic_Dep",
        nombre: "PDep_Nombre",
        activo: "PDep_Activo_Inactivo",
        mostrar: "PDep_Mostrar_Web"
    },
    camposProfesionales: {
        ini_dep: "_Inic_Depto",
        ini_fun: "_Inic_Func",
        nombre: "Fun_Nom_Completo",
        activo: "Func_Activo_Inac",
        mostrar: "Func_Mostrar_Web"
    },

    camposAgenda: {
        ini_fun: "_Inic_Func",
        // ini_funcionario: "Rut_Prof",
        estatus: "FIAg_Status",
        nombre_motivo: "FIAg_Detalle",
        fecha: "Fecha",
        hora: "Hora_Inicio",
        nombre: "Nombre",
        nombre_completo: "Func_Nom_Completo",
        id_agenda_func: "_Inic_Func",
        inic_depto: "_Inic_Dpto",
        tipo_gestion: "TipoGestion",
        detalle: "FIAg_Detalle",
        id_reserva: "_ID_Reserva",
        id_solic: "_ID_Sol",

    },






}