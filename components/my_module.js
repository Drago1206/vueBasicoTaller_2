export default {
    data() {
    return {
        Aggprof: false,
        Aggalumn: false,
        usuarios:null,
        sel: "",
        campus:null,
        aprendices: null,
        NomApren:'',
        ApllApren:'',
        No_tel:'',
        emailApren:'',
        barrio:'',
        transporte:'',
        dia_clase:'',
        hora_clase:'',
        salones:'',
        Tecnologia:'',
        materiaimp:'',
        Modalidad:'',
        Tecnico:'',
        No_creditos:'',
        No_asignaturas:'',
        año:'',
        NameProf:'',
        TelProf:'',
        EmailProf:'',
        DiaClase:'',
        asignatura:'',
        tipo:'',
        Horaprof:'',
        salonprof:'',
        instructor:null,




    }
    },
    methods: {
        getdatos() {
        fetch("./components/config.json")
        .then((response) => response.json())
        .then((data) => {
            this.usuarios = data;
            console.log(this.usuarios[0][this.sel])
            this.campus = this.usuarios[0][this.sel]
            this.instructor = this.usuarios[0][this.sel][0].Instructores
            console.log(this.instructor)
            this.aprendices = this.usuarios[0][this.sel][0].Aprendices
            console.log(this.aprendices)
            /*    fv4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            
            or(let i=0; i in this.campus; i++){
                console.log(this.campus)
            }  */
        })
        },
        enviar(){
            this.aprendices.push(
                {
                    Nombre: this.NomApren,
                    telefono:this.No_tel,
                    email: this.emailApren,
                    Barrio: this.barrio,
                    Transporte: this.transporte,
                    Teams:{
                        horario:this.dia_clase,
                        hora:this.hora_clase,
                        salones:this.salones
                    },
                    Niveles:{
                        Pre_requisito:this.materiaimp,
                        tecnologia: this.Tecnologia,
                        tecnico:this.Tecnico,
                        modalidad:this.Modalidad
                    },
                    roadmap:{
                        Nro_creditos:this.No_creditos,
                        Año: this.año,
                        Nro_asignaturas:this.No_asignaturas
                    }
                }
            )
        },
        enviar2(){

            this.instructor.push(
                {
                Nombre: this.NameProf,
                telefono: this.TelProf,
                email:this.EmailProf,
                Teams:{
                    horario:this.DiaClase,
                    Asignatura:this.asignatura,
                    Tipo:this.tipo,
                    hora:this.Horaprof,
                    salones:this.salonprof
                }
                
            }
            )
            
            /* this.instructor.push(this.Datos_prof)  */

            /*          console.log(this.instructor)
            console.log(this.campus)
            console.log(JSON.stringify(this.campus))
             */
            
        }
    }
};
