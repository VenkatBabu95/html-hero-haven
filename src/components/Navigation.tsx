import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, BookOpen } from 'lucide-react';

interface LessonItem {
  id: string;
  title: string;
  completed: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface NavigationProps {
  lessons: LessonItem[];
  currentLesson: string;
  onLessonSelect: (lessonId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ lessons, currentLesson, onLessonSelect }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success-light text-success border-success/20';
      case 'intermediate': return 'bg-warning-light text-warning border-warning/20';
      case 'advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const completedCount = lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedCount / lessons.length) * 100;

  return (
    <Card className="bg-card shadow-medium border-border h-full">
      <div className="p-6 border-b border-border bg-gradient-primary">
        <div className="flex items-center gap-3 text-white">
          <BookOpen className="h-6 w-6" />
          <div>
            <h2 className="text-xl font-bold">HTML Workshop</h2>
            <p className="text-white/80 text-sm">Master HTML from basics to advanced</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm text-white/90 mb-2">
            <span>Progress</span>
            <span>{completedCount}/{lessons.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onLessonSelect(lesson.id)}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:shadow-soft ${
              currentLesson === lesson.id
                ? 'bg-secondary border-secondary text-secondary-foreground'
                : 'bg-card hover:bg-accent border-border text-foreground'
            }`}
          >
            <div className="flex items-start gap-3">
              {lesson.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm leading-tight mb-2">{lesson.title}</h3>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getDifficultyColor(lesson.difficulty)}`}
                >
                  {lesson.difficulty}
                </Badge>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;