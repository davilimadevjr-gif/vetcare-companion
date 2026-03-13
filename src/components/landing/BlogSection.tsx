import { motion } from "framer-motion";
import dogBall from "@/assets/dog-ball.jpg";
import catHappy from "@/assets/cat-happy.jpg";
import dogDuckToy from "@/assets/dog-duck-toy.jpg";

const posts = [
  {
    image: dogBall,
    imageAlt: "Cachorro brincando com bola",
    category: "Prevenção",
    title: "Calendário de vacinação: tudo o que você precisa saber",
    excerpt: "Entenda quais vacinas são essenciais para cães e gatos em cada fase da vida e por que manter o calendário em dia é fundamental.",
    readTime: "5 min de leitura",
  },
  {
    image: catHappy,
    imageAlt: "Gato feliz e saudável",
    category: "Nutrição",
    title: "Alimentação natural para pets: mitos e verdades",
    excerpt: "Descubra se a alimentação natural é realmente a melhor opção para o seu pet e como fazer a transição de forma segura.",
    readTime: "7 min de leitura",
  },
  {
    image: dogDuckToy,
    imageAlt: "Cachorro brincando com brinquedo",
    category: "Cuidados",
    title: "5 sinais de que seu pet precisa ir ao veterinário urgentemente",
    excerpt: "Alguns sintomas podem indicar problemas graves. Aprenda a identificar os sinais de alerta que exigem atendimento imediato.",
    readTime: "4 min de leitura",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog e Dicas</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Conteúdo para tutores conscientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Artigos escritos pela nossa equipe veterinária para ajudar você a cuidar melhor do seu pet.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
