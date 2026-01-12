import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import CountUpNumber from "./CountUpNumber";
const Hero = () => {
  return <section id="home" className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <motion.div animate={{
              rotate: [0, 15, -15, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}>
                
              </motion.div>
              <span className="text-sm text-primary font-semibold">Os Melhores Cursos de Terapia</span>
            </motion.div>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">Conheça o</span><br />
              <span className="text-secondary">Instituto Medina</span>
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-gray-600 text-lg leading-relaxed">
              Mais de <strong className="text-primary">5.000 formados</strong> na área de <strong className="text-secondary">Terapia Integrativa</strong> estão dispostos a te mostrar que você também pode fazer parte disso. Venha conhecer os melhores cursos coordenados pelo professor e terapeuta <strong>Sérgio Medina</strong>.
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Quero Ser o Melhor!
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" className="w-full sm:w-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg group transition-all duration-300">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-4">
                {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"].map((src, index) => <motion.img key={index} src={src} alt={`Aluno formado pelo Instituto Medina ${index + 1}`} className="w-12 h-12 rounded-full border-2 border-white object-cover" initial={{
                opacity: 0,
                scale: 0
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.5 + index * 0.1
              }} whileHover={{
                scale: 1.2,
                zIndex: 50
              }} style={{
                zIndex: 30 - index * 10
              }} loading="lazy" decoding="async" />)}
              </div>
              <div className="flex flex-col">
                <CountUpNumber end={5000} suffix="+" className="font-bold text-xl text-primary" />
                <span className="text-sm text-gray-600">Alunos Formados</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          x: 100
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative max-w-md mx-auto md:max-w-none">
            <motion.div className="absolute inset-0 bg-primary/20 rounded-3xl -rotate-6" whileHover={{
            rotate: 0
          }} transition={{
            duration: 0.5
          }} />
            <motion.div className="relative bg-white p-4 rounded-3xl shadow-xl" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Aula prática de terapia integrativa no Instituto Medina" className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl" loading="eager" fetchPriority="high" decoding="async" />
              <motion.div className="absolute -right-4 -top-4 px-4 py-2 bg-secondary text-white rounded-full shadow-lg flex items-center gap-2" animate={{
              y: [0, -8, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-semibold">Formação Profissional</span>
              </motion.div>
              <motion.div className="absolute -left-4 -bottom-4 px-6 py-2 bg-primary text-white rounded-full shadow-lg flex items-center gap-2" animate={{
              y: [0, -8, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}>
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold">5.000+ Formados</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;