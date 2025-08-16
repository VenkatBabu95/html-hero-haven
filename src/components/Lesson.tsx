import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Clock, Target } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface LessonContent {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  objectives: string[];
  description: string;
  concepts: {
    title: string;
    content: string;
  }[];
  examples: {
    title: string;
    code: string;
    explanation: string;
    executable?: boolean;
  }[];
  exercises?: {
    title: string;
    instructions: string;
    starter: string;
    solution: string;
  }[];
  completed: boolean;
}

interface LessonProps {
  lesson: LessonContent;
  onComplete: (lessonId: string) => void;
  onNext: () => void;
}

const Lesson: React.FC<LessonProps> = ({ lesson, onComplete, onNext }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success-light text-success border-success/20';
      case 'intermediate': return 'bg-warning-light text-warning border-warning/20';
      case 'advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card className="bg-card shadow-medium border-border">
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{lesson.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{lesson.duration}</span>
                </div>
                <Badge className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
              </div>
            </div>
            {lesson.completed && <CheckCircle2 className="h-8 w-8 text-success" />}
          </div>
          
          <p className="text-foreground/80 text-lg leading-relaxed mb-6">{lesson.description}</p>
          
          <div className="bg-accent/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Learning Objectives</h3>
            </div>
            <ul className="space-y-2">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Concepts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Concepts</h2>
        {lesson.concepts.map((concept, index) => (
          <Card key={index} className="bg-card shadow-soft border-border">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{concept.title}</h3>
              <div 
                className="prose prose-slate max-w-none text-foreground/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: concept.content }}
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Examples</h2>
        {lesson.examples.map((example, index) => (
          <div key={index} className="space-y-4">
            <Card className="bg-card shadow-soft border-border">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{example.title}</h3>
                <p className="text-foreground/80 mb-4">{example.explanation}</p>
              </div>
            </Card>
            <CodeBlock
              code={example.code}
              title={`Example: ${example.title}`}
              executable={example.executable}
            />
          </div>
        ))}
      </div>

      {/* Exercises */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Exercises</h2>
          {lesson.exercises.map((exercise, index) => (
            <Card key={index} className="bg-card shadow-soft border-border">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{exercise.title}</h3>
                <p className="text-foreground/80 mb-4">{exercise.instructions}</p>
                
                <div className="space-y-4">
                  <CodeBlock
                    code={exercise.starter}
                    title="Starter Code"
                    executable={true}
                  />
                  
                  <details className="group">
                    <summary className="cursor-pointer text-primary hover:text-primary-hover font-medium">
                      View Solution
                    </summary>
                    <div className="mt-4">
                      <CodeBlock
                        code={exercise.solution}
                        title="Solution"
                        executable={true}
                      />
                    </div>
                  </details>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Lesson Actions */}
      <Card className="bg-card shadow-medium border-border">
        <div className="p-6 flex items-center justify-between">
          <div>
            {lesson.completed ? (
              <div className="flex items-center gap-2 text-success">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Lesson Completed!</span>
              </div>
            ) : (
              <span className="text-muted-foreground">Complete this lesson to continue</span>
            )}
          </div>
          
          <div className="flex gap-3">
            {!lesson.completed && (
              <Button 
                onClick={() => onComplete(lesson.id)}
                className="bg-success hover:bg-success-hover text-success-foreground"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Mark Complete
              </Button>
            )}
            <Button 
              onClick={onNext}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Next Lesson
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Lesson;