import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    productType: '',
    volume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({ name: '', company: '', contact: '', productType: '', volume: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/80 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/690bd893-5a98-434c-910d-327d16f26e07.png" 
                alt="КШФ" 
                className="h-12 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-secondary-foreground hover:text-primary transition-colors">О фабрике</button>
              <button onClick={() => scrollToSection('services')} className="text-secondary-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-secondary-foreground hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('faq')} className="text-secondary-foreground hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-secondary-foreground hover:text-primary transition-colors">Контакты</button>
            </nav>
            
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[600px] flex items-center text-secondary-foreground overflow-hidden red-fabric-bg">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-5xl w-full animate-fade-in text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-shadow">
              Крупное швейное производство в Пензенской области
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-5">
                <div className="bg-[#a11520] p-3 rounded-full">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white">100+</div>
                  <div className="text-sm text-white/80 mt-1">Квалифицированных швей</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-5">
                <div className="bg-[#a11520] p-3 rounded-full">
                  <Icon name="Factory" className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white">8000 м²</div>
                  <div className="text-sm text-white/80 mt-1">Производственных площадей</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-5 sm:col-span-2 lg:col-span-1">
                <div className="bg-[#a11520] p-3 rounded-full">
                  <Icon name="Calendar" className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-white">С 1941</div>
                  <div className="text-sm text-white/80 mt-1">Года на рынке</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contact')}>
                Отправить техзадание
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Users', title: '100+ швей', desc: 'Квалифицированная команда профессионалов' },
              { icon: 'Factory', title: '8000 м²', desc: 'Производственные площади с современным оборудованием' },
              { icon: 'Scissors', title: 'Полный цикл', desc: 'От раскроя до упаковки под ключ' },
              { icon: 'ShoppingBag', title: 'Маркетплейсы', desc: 'Опыт работы с Wildberries, Ozon, Яндекс' },
              { icon: 'TrendingUp', title: 'Гибкие объёмы', desc: 'От пробных партий до массового производства' },
              { icon: 'Clock', title: '24 часа', desc: 'Расчёт стоимости от 24 часов' }
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background red-fabric-overlay">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">О фабрике</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <Icon name="Calendar" className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-2xl font-bold mb-3">История с 1941 года</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Кузнецкая швейная фабрика — одно из старейших производственных предприятий Пензенской области. 
                  За более чем 80 лет работы мы прошли путь от небольшого цеха до крупного современного производства 
                  с полным технологическим циклом.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Автоматизированный раскройный комплекс Morgan Technika</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Современное швейное оборудование Juki, Brother</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Собственный цех ВТО и упаковки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Система контроля качества на всех этапах</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/be1f1a86-dd96-4773-ae5d-d2c24bbafce7/files/fff871eb-6fe8-4e91-a422-84a6cbbd5267.jpg" 
                alt="Оборудование"
                className="rounded-lg w-full h-64 object-cover hover-scale"
              />
              <img 
                src="https://cdn.poehali.dev/projects/be1f1a86-dd96-4773-ae5d-d2c24bbafce7/files/d8ead7bc-8816-4c23-af9c-5bce848545d3.jpg" 
                alt="Продукция"
                className="rounded-lg w-full h-64 object-cover hover-scale"
              />
              <img 
                src="https://cdn.poehali.dev/projects/be1f1a86-dd96-4773-ae5d-d2c24bbafce7/files/ecb697b3-2b8c-48eb-869e-65bf07911de6.jpg" 
                alt="Цех"
                className="rounded-lg w-full h-64 object-cover hover-scale col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Услуги</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Icon name="Shirt" className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-2xl font-bold mb-4">Виды производства</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span><strong>CMT</strong> — контрактное шитьё по лекалам заказчика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span><strong>FOB</strong> — полный цикл под ключ от идеи до упаковки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Разработка лекал и техкарт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Изготовление пробных образцов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Icon name="Package" className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-2xl font-bold mb-4">Типы продукции</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Повседневная одежда (женская/мужская/детская)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Форменная и корпоративная одежда</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Спецодежда и рабочая униформа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ArrowRight" className="text-primary mt-1" size={18} />
                    <span>Текстильные изделия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground border-0 red-fabric-bg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <Icon name="Info" size={32} />
                  <div>
                    <h3 className="font-heading text-xl font-bold">Минимальный объём заказа</h3>
                    <p className="text-primary-foreground/90">От 500 единиц продукции</p>
                  </div>
                </div>
                <Button variant="secondary" size="lg" onClick={() => scrollToSection('contact')}>
                  Обсудить проект
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="font-heading text-lg hover:text-primary">
                Работаете ли вы с индивидуальными предпринимателями?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы работаем как с юридическими лицами, так и с индивидуальными предпринимателями. 
                Основное требование — минимальный объём заказа от 500 единиц.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="font-heading text-lg hover:text-primary">
                Сколько времени занимает изготовление пробного образца?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Изготовление пробного образца занимает от 3 до 7 рабочих дней в зависимости от сложности модели 
                и доступности материалов. Точные сроки согласовываются индивидуально.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="font-heading text-lg hover:text-primary">
                Можно ли использовать свои ткани и фурнитуру?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы работаем как с давальческим сырьём (материалы заказчика), так и можем обеспечить 
                полный цикл с закупкой материалов. Оба варианта обсуждаются при расчёте стоимости.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="font-heading text-lg hover:text-primary">
                Какие сроки производства для массовых партий?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Сроки зависят от объёма и сложности заказа. В среднем производство партии 1000-5000 единиц 
                занимает 2-4 недели. Точные сроки рассчитываются после согласования технического задания.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="font-heading text-lg hover:text-primary">
                Работаете ли вы с маркетплейсами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, у нас большой опыт работы с маркетплейсами Wildberries, Ozon, Яндекс Маркет. 
                Знаем все требования к упаковке, маркировке и документации для площадок.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-4 text-center">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">Отправьте техзадание — рассчитаем стоимость от 24 часов</p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Компания *</Label>
                    <Input 
                      id="company" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact">Email или телефон *</Label>
                    <Input 
                      id="contact" 
                      required 
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="productType">Тип продукции</Label>
                    <Input 
                      id="productType" 
                      placeholder="Например: женские блузки"
                      value={formData.productType}
                      onChange={(e) => setFormData({...formData, productType: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="volume">Примерный объём</Label>
                    <Input 
                      id="volume" 
                      placeholder="Например: 1000 единиц"
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Опишите ваш проект..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">Адрес</h3>
                      <p className="text-muted-foreground">Пензенская область, г. Кузнецк, ул. Рабочая 200</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">8(841257)3-29-21</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@kshf58.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-primary/20 red-fabric-overlay">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold mb-2">Кузнецкая швейная фабрика</h3>
              <p className="text-muted-foreground">Качество проверенное временем с 1941 года</p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-[#a11520] text-[#a11520] hover:bg-[#a11520] hover:text-white">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-[#a11520] text-[#a11520] hover:bg-[#a11520] hover:text-white">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>© 2025 Кузнецкая швейная фабрика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}