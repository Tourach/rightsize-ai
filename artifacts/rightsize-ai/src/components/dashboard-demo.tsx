import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, Cell
} from 'recharts';
import { AlertCircle, ArrowUpRight, CheckCircle2, Server, TrendingUp, AlertTriangle, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const trendData = [
  { month: 'Jan', spend: 45000 },
  { month: 'Feb', spend: 52000 },
  { month: 'Mar', spend: 68000 },
  { month: 'Apr', spend: 89000 },
  { month: 'May', spend: 110000 },
  { month: 'Jun', spend: 127450 },
];

const modelSpendData = [
  { name: 'GPT-4o', spend: 52000, color: 'hsl(var(--chart-1))' },
  { name: 'Claude 3.5', spend: 31000, color: 'hsl(var(--chart-2))' },
  { name: 'Gemini 1.5', spend: 19000, color: 'hsl(var(--chart-3))' },
  { name: 'Internal LLM', spend: 14000, color: 'hsl(var(--chart-4))' },
  { name: 'Other', spend: 11000, color: 'hsl(var(--chart-5))' },
];

const useCaseGaps = [
  { name: 'Contract Review', gap: 4.2, status: 'Critical Waste' },
  { name: 'Data Extraction', gap: 3.7, status: 'High Waste' },
  { name: 'Customer Emails', gap: 1.1, status: 'Optimized' },
];

export default function DashboardDemo() {
  return (
    <div className="bg-background text-foreground p-6 font-sans">
      {/* Top Stat Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-card border-border/50">
          <CardContent className="p-4">
            <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Total AI Spend (MTD)</p>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold font-display">$127,450</h3>
              <span className="text-xs text-destructive flex items-center mb-1"><TrendingUp className="w-3 h-3 mr-1" /> +36%</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardContent className="p-4">
            <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Estimated Waste</p>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold font-display text-chart-3">$38,235</h3>
              <span className="text-xs text-muted-foreground mb-1">30%</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50 border-l-2 border-l-destructive">
          <CardContent className="p-4">
            <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Risk Flags</p>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-bold font-display text-destructive">4</h3>
              <span className="text-xs font-medium px-2 py-1 rounded bg-destructive/10 text-destructive border border-destructive/20">Active</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardContent className="p-4">
            <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Shadow AI Incidents</p>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-bold font-display">2</h3>
              <span className="text-xs text-muted-foreground">This week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Main Chart */}
        <Card className="col-span-2 bg-card border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono uppercase text-muted-foreground">AI Spend Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="spend" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: 'hsl(var(--background))', strokeWidth: 2 }} 
                    activeDot={{ r: 6, fill: 'hsl(var(--primary))' }} 
                  />
                  <ReferenceLine x="Apr" stroke="hsl(var(--chart-3))" strokeDasharray="3 3" label={{ position: 'top', value: 'New Agent Deployed', fill: 'hsl(var(--chart-3))', fontSize: 10 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Breakdown */}
        <Card className="bg-card border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono uppercase text-muted-foreground">Spend by Model</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modelSpendData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground))" fontSize={11} tickLine={false} axisLine={false} width={80} />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))' }}
                  />
                  <Bar dataKey="spend" radius={[0, 4, 4, 0]} barSize={20}>
                    {modelSpendData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Quality Gap */}
        <Card className="bg-card border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono uppercase text-muted-foreground flex items-center justify-between">
              Model Quality Gap <Tooltip title="Ratio of model capability to task complexity" />
            </CardTitle>
            <CardDescription className="text-xs">Frontier models performing commodity tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-2">
              {useCaseGaps.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className={`font-mono font-bold ${item.gap > 3 ? 'text-destructive' : item.gap > 2 ? 'text-chart-3' : 'text-chart-2'}`}>
                      {item.gap}x Gap
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.gap > 3 ? 'bg-destructive' : item.gap > 2 ? 'bg-chart-3' : 'bg-chart-2'}`} 
                      style={{ width: `${Math.min(100, item.gap * 20)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground text-right">{item.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Panel */}
        <Card className="bg-card border-border/50">
          <CardHeader className="pb-2 border-b border-border/50">
            <CardTitle className="text-sm font-mono uppercase text-muted-foreground flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-destructive" /> Compliance & Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex gap-3">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-destructive">EU AI Act: High Risk System Flag</h4>
                  <p className="text-xs text-muted-foreground mt-1">HR CV Screening agent missing human-in-the-loop validation override.</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/20 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-chart-3">Data Sovereignty Warning</h4>
                  <p className="text-xs text-muted-foreground mt-1">Customer PII routed through non-EU Anthropic endpoint (us-east-1).</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-chart-2/10 border border-chart-2/20 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-chart-2">Shadow IT Scan Complete</h4>
                  <p className="text-xs text-muted-foreground mt-1">2 unapproved API keys disabled. Traffic routed to gateway.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
