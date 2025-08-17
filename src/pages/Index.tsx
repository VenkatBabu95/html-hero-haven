import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lesson from '@/components/Lesson';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { lessons, getLessonById, getNextLessonId } from '@/data/lessons';
import { BookOpen, Code, Users, Award, ArrowRight, Zap } from 'lucide-react';

const Index = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const currentLesson = currentLessonId ? getLessonById(currentLessonId) : null;

  const handleLessonSelect = (lessonId: string) => {
    setCurrentLessonId(lessonId);
  };

  const handleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const handleNextLesson = () => {
    if (currentLessonId) {
      const nextId = getNextLessonId(currentLessonId);
      if (nextId) {
        setCurrentLessonId(nextId);
      }
    }
  };

  const lessonsWithProgress = lessons.map(lesson => ({
    ...lesson,
    completed: completedLessons.has(lesson.id)
  }));

  const stats = {
    total: lessons.length,
    completed: completedLessons.size,
    beginner: lessons.filter(l => l.difficulty === 'beginner').length,
    intermediate: lessons.filter(l => l.difficulty === 'intermediate').length,
    advanced: lessons.filter(l => l.difficulty === 'advanced').length
  };

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-primary text-white">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Code className="h-12 w-12" />
                <h1 className="text-5xl font-bold">HTML Workshop</h1>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Master HTML from fundamentals to advanced concepts with hands-on examples, 
                interactive exercises, and real-world projects.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{stats.total} Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span>Interactive Learning</span>
                </div>
              </div>
              <Button 
                onClick={() => setCurrentLessonId(lessons[0].id)}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center bg-secondary/20 shadow-soft border-secondary/30">
              <div className="text-3xl font-bold text-secondary mb-2">{stats.total}</div>
              <div className="text-muted-foreground">Total Lessons</div>
            </Card>
            <Card className="p-6 text-center bg-card shadow-soft border-border">
              <div className="text-3xl font-bold text-success mb-2">{stats.beginner}</div>
              <div className="text-muted-foreground">Beginner</div>
            </Card>
            <Card className="p-6 text-center bg-card shadow-soft border-border">
              <div className="text-3xl font-bold text-warning mb-2">{stats.intermediate}</div>
              <div className="text-muted-foreground">Intermediate</div>
            </Card>
            <Card className="p-6 text-center bg-card shadow-soft border-border">
              <div className="text-3xl font-bold text-destructive mb-2">{stats.advanced}</div>
              <div className="text-muted-foreground">Advanced</div>
            </Card>
          </div>

          {/* Course Overview */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What You'll Learn</h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive journey through HTML from basic structure to advanced techniques
              </p>
            </div>

            {/* Lesson Preview Cards */}
            <div className="grid gap-6 mb-12">
              {lessonsWithProgress.map((lesson, index) => (
                <Card 
                  key={lesson.id} 
                  className="p-6 bg-card shadow-soft border-border hover:shadow-medium transition-shadow cursor-pointer"
                  onClick={() => handleLessonSelect(lesson.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary font-bold text-lg border border-secondary/30">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{lesson.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline"
                            className={`${
                              lesson.difficulty === 'beginner' ? 'bg-success-light text-success border-success/20' :
                              lesson.difficulty === 'intermediate' ? 'bg-warning-light text-warning border-warning/20' :
                              'bg-destructive/10 text-destructive border-destructive/20'
                            }`}
                          >
                            {lesson.difficulty}
                          </Badge>
                          {lesson.completed && <Award className="h-5 w-5 text-success" />}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{lesson.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:bg-secondary hover:text-secondary-foreground border-secondary/30"
                        >
                          {lesson.completed ? 'Review' : 'Start Lesson'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="p-8 text-center bg-gradient-primary text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your HTML Journey?</h3>
              <p className="text-white/90 mb-6">
                Join thousands of developers who have mastered HTML through our comprehensive workshop
              </p>
              <Button 
                onClick={() => setCurrentLessonId(lessons[0].id)}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Begin Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Navigation Sidebar */}
      <div className="w-80 flex-shrink-0 p-6">
        <Navigation
          lessons={lessonsWithProgress}
          currentLesson={currentLessonId}
          onLessonSelect={handleLessonSelect}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <Lesson
            lesson={{
              ...currentLesson,
              completed: completedLessons.has(currentLesson.id)
            }}
            onComplete={handleLessonComplete}
            onNext={handleNextLesson}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
