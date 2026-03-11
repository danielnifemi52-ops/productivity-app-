import 'package:flutter/material.dart';

import 'core/di/injection.dart';
import 'shared/theme/app_theme.dart';
import 'features/app_block/presentation/pages/app_block_page.dart';

void main() {
  configureDependencies();
  runApp(const ProductivityControlApp());
}

class ProductivityControlApp extends StatelessWidget {
  const ProductivityControlApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Productivity Control',
      theme: AppTheme.light,
      home: const AppBlockPage(),
    );
  }
}
